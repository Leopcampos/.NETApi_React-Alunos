using System.Threading.Tasks;

namespace AlunosApi.Services
{
    public interface IAuthenticate
    {
        Task<bool> Authenticate(string email, string password);
        Task Logout();
    }
}
