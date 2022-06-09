using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using WebApplication1.Models;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace WebApplication1.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class LecturersController : ControllerBase
    {
        private readonly ILogger<LecturersController> _logger;

        public LecturersController(ILogger<LecturersController> logger)
        {
            _logger = logger;
        }


        // GET
        [HttpGet(Name = "GetLectures")]
        public IEnumerable<Lecturers> Get()
        {
            List<Lecturers> lectureList = JsonDataReader.GetAllLectures();
            return lectureList;

        }

        [HttpGet("GetByLanguage/{language}")]
        public IEnumerable<Lecturers> Get(int language)
        {
            List<Lecturers> lectureList = JsonDataReader.GetAllLectures();
            return lectureList.Where(lecture => lecture.languages.Contains(language));

        }
    }
}
