using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using WebApplication1.Models;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace WebApplication1.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class LanguagesController : ControllerBase
    {
        private readonly ILogger<LanguagesController> _logger;

        public LanguagesController(ILogger<LanguagesController> logger)
        {
            _logger = logger;
        }


        // GET
        [HttpGet(Name = "GetLanguages")]
        public IEnumerable<Languages> Get()
        {
            List<Languages> languagesList = JsonDataReader.GetAllLanguages();
            return languagesList;

        }
    }
}
