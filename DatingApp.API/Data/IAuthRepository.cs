using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Resister(User user, string password);
        Task<User> Login(UserForLoginDto userForLoginDto);
        Task<bool> UserExists(string username);

    }
}
