describe("Sector api testing", () => {
    it("GET", () => {
  
      cy.request({
        method: "GET",
        url: "http://localhost:3000/",
      }).then((response) => {
  
        expect(response.status).equal(200);
        expect(response.body).to.not.be.null;
      });
    });
  
    it("POST", () => {
  
      const sector = {
        sector: "Administracion"
      };
  
      cy.request({
        method: "POST",
        url: "http://localhost:3000/crearSector",
        body: sector,
      }).then((response) => {
        expect(response.status).equal(200);
  
      })
  
        .its("body")
        .should("include", {
            msg: `Se creo correctamente el sector`,
            
        });
    });
  
});
  