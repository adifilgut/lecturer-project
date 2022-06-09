using Newtonsoft.Json;
using WebApplication1.Models;

namespace WebApplication1
{
    public static class JsonDataReader
    {
        public static List<Lecturers> GetAllLectures()
        {
            var json = File.ReadAllText("Lecturers.json");
            var lecturersList = JsonConvert.DeserializeObject<List<Lecturers>>(json);
            return lecturersList;
        }

        public static List<Languages> GetAllLanguages()
        {
            var json = File.ReadAllText("Languages.json");
            var languagesList = JsonConvert.DeserializeObject<List<Languages>>(json);
            return languagesList;
        }
    }
}
