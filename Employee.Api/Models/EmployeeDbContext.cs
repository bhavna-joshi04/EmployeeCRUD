using Microsoft.EntityFrameworkCore;

namespace Employee.Api.Models
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : base(options) {
            

        }   
        public DbSet<EmployeeData> EmployeeMaster { get; set; }
    }
}
