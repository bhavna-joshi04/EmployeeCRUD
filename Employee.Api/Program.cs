
using Employee.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Employee.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            builder.Services.AddDbContext<EmployeeDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DatabaseConnection")));

            builder.Services.AddCors();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: "allowCors",
                builder =>
                        {
                            builder.WithOrigins("http://localhost:4200")
                            .AllowCredentials()
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                        });
            });
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseCors("allowCors");
            app.MapControllers();

            app.Run();
        }
    }
}
