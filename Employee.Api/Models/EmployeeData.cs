﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Employee.Api.Models
{
    public class EmployeeData
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int empId {  get; set; }
        [Required]
        [MaxLength(50)]
        public string? firstName { get; set; }
        [Required]
        [MaxLength(50)]
        public string? lastName { get; set; }
        public string email { get; set; }
        [Required]
        [MaxLength(10)]
        [MinLength(10)]
        public string contactNo { get; set; }
        public string city { get; set; }
        public string address{get; set; }
    }
}
