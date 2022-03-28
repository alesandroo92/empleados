describe("Empleados api testing", () => {
    it("GET", () => {
  
      cy.request({
        method: "GET",
        url: "http://localhost:3000/empleados",
      }).then((response) => {
  
        expect(response.status).equal(200);
        expect(response.body).to.not.be.null;
      });
    });
  
    it("POST", () => {
  
      const empleados = {
        nombre: "Test-Nombre",
        apellido: "Test-apellido",
        idSector: 1
      };
  
      cy.request({
        method: "POST",
        url: "http://localhost:3000/crearEmpleado",
        body: empleados,
      }).then((response) => {
        expect(response.status).equal(200);
  
      })
  
        .its("body")
        .should("include", {
            msg: `Se creo correctamente el empleado`,
            
        });
    });
  
});
  