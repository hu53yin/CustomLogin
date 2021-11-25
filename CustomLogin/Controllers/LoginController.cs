using CustomLogin.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CustomLogin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IUserEmailStore<ApplicationUser> emailStore;
        private readonly IUserStore<ApplicationUser> userStore;
        private readonly SignInManager<ApplicationUser> signInManager;

        public LoginController(
            UserManager<ApplicationUser> userManager,
            IUserStore<ApplicationUser> userStore,
            SignInManager<ApplicationUser> signInManager
            )
        {
            this.userManager = userManager;
            this.userStore = userStore;
            this.emailStore = GetEmailStore();
            this.signInManager = signInManager;
        }

        private IUserEmailStore<ApplicationUser> GetEmailStore()
        {
            if (!userManager.SupportsUserEmail)
            {
                throw new NotSupportedException("The default UI requires a user store with email support.");
            }
            return (IUserEmailStore<ApplicationUser>)userStore;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<bool>> Login(LoginRequestModel login)
        {
            var user = Activator.CreateInstance<ApplicationUser>();

            await userStore.SetUserNameAsync(user, login.Username, CancellationToken.None);
            await emailStore.SetEmailAsync(user, login.Username, CancellationToken.None);

            var signInUser = await userManager.FindByNameAsync(login.Username);

            if (signInUser == null)
            {
                var result = await userManager.CreateAsync(user, "1234Cus.tom567.");

                if (result.Succeeded)
                {
                    await signInManager.PasswordSignInAsync(user.UserName, "1234Cus.tom567.", isPersistent: false, false);
                }
            }
            else
            {
                await signInManager.PasswordSignInAsync(user.UserName, "1234Cus.tom567.", isPersistent: false, false);
            }

            return Ok(true);
        }
    }
}