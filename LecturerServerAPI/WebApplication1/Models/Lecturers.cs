using AutoMapper;
using AutoMapper.Internal.Mappers;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections;

namespace WebApplication1.Models
{
    public class Lecturers
    {
        public int id { get; set; }
        public String name { get; set; }
        public String email { get; set; }
        public List<int> languages { get; set; }
    }
    
}
