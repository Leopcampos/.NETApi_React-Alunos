using Microsoft.EntityFrameworkCore.Migrations;

namespace AlunosApi.Migrations
{
    public partial class PopulaTabela : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "ALUNOS",
                columns: new[] { "Id", "Email", "Idade", "Nome" },
                values: new object[] { 1, "mariapenha@yahoo.com", 23, "Maria da Penha" });

            migrationBuilder.InsertData(
                table: "ALUNOS",
                columns: new[] { "Id", "Email", "Idade", "Nome" },
                values: new object[] { 2, "manuelbueno@yahoo.com", 22, "Manuel Bueno" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ALUNOS",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ALUNOS",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
