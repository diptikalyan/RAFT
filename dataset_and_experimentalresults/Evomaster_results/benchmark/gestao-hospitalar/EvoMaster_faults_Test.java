import  org.junit.AfterClass;
import  org.junit.BeforeClass;
import  org.junit.Before;
import  org.junit.Test;
import static org.junit.Assert.*;
import  java.util.Map;
import  io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import  io.restassured.response.ValidatableResponse;
import static org.evomaster.client.java.controller.api.EMTestUtils.*;
import  org.evomaster.client.java.controller.SutHandler;
import static org.evomaster.client.java.controller.db.dsl.SqlDsl.sql;
import  org.evomaster.client.java.controller.api.dto.database.operations.InsertionResultsDto;
import  org.evomaster.client.java.controller.api.dto.database.operations.InsertionDto;
import  java.util.List;
import static org.hamcrest.Matchers.*;
import  io.restassured.config.JsonConfig;
import  io.restassured.path.json.config.JsonPathConfig;
import static io.restassured.config.RedirectConfig.redirectConfig;
import static org.evomaster.client.java.controller.contentMatchers.NumberMatcher.*;
import static org.evomaster.client.java.controller.contentMatchers.StringMatcher.*;
import static org.evomaster.client.java.controller.contentMatchers.SubStringMatcher.*;
import static org.evomaster.client.java.controller.expect.ExpectationHandler.expectationHandler;
import  org.evomaster.client.java.controller.expect.ExpectationHandler;
import  io.restassured.path.json.JsonPath;
import  java.util.Arrays;




/**
 * This file was automatically generated by EvoMaster on 2022-11-08T12:30:41.954849+05:30[Asia/Kolkata]
 * <br>
 * The generated test suite contains 18 tests
 * <br>
 * Covered targets: 37
 * <br>
 * Used time: 0h 16m 45s
 * <br>
 * Needed budget for current results: 99%
 * <br>
 * This file contains test cases that are likely to indicate faults.
 */
public class EvoMaster_faults_Test {

    
    private static String baseUrlOfSut = "http://localhost:8080";
    /** [ems] - expectations master switch - is the variable that activates/deactivates expectations individual test cases
    * by default, expectations are turned off. The variable needs to be set to [true] to enable expectations
    */
    private static boolean ems = false;
    /**
    * sco - supported code oracle - checking that the response status code is among those supported according to the schema
    */
    private static boolean sco = false;
    
    
    @BeforeClass
    public static void initClass() {
        RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
        RestAssured.useRelaxedHTTPSValidation();
        RestAssured.urlEncodingEnabled = false;
        RestAssured.config = RestAssured.config()
            .jsonConfig(JsonConfig.jsonConfig().numberReturnType(JsonPathConfig.NumberReturnType.DOUBLE))
            .redirect(redirectConfig().followRedirects(false));
    }
    
    
    
    
    
    
    
    
    @Test(timeout = 60000)
    public void test_0() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        given().accept("*/*")
                .contentType("application/json")
                .body(" \"Ez\" ")
                .post(baseUrlOfSut + "/v1/hospitais/Ez/pacientes/checkout")
                .then()
                .statusCode(404)
                .assertThat()
                .body(isEmptyOrNullString());
        
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais/sedmz4q9zsEoKK/estoque/b5CY")
                .then()
                .statusCode(404)
                .assertThat()
                .body(isEmptyOrNullString());
        
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais/MttL000GN/pacientes/7")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("'name'", containsString("G6jD"))
                .body("'cpf'", containsString("H0dxNg5HqarZQrz"))
                .body("'birthDate'", nullValue())
                .body("'gender'", nullValue())
                .body("'entryDate'", containsString("2019-07-16T00:00:00.000+0000"))
                .body("'exitDate'", containsString("2019-07-16T00:00:00.000+0000"))
                .body("'active'", equalTo(false))
                .body("'location'.'name'", containsString("Ana"))
                .body("'location'.'referenceId'", containsString("R. Campo Verde, 700 - Jardim Europa, São Paulo - SP, 04794-000"))
                .body("'location'.'locationCategory'", containsString("PATIENT"))
                .body("'location'.'position'.'x'", numberMatches(-46.694697))
                .body("'location'.'position'.'y'", numberMatches(-23.577483))
                .body("'location'.'position'.'coordinates'.size()", equalTo(2))
                .body("'location'.'position'.'coordinates'[0]", numberMatches(-46.694697))
                .body("'location'.'position'.'coordinates'[1]", numberMatches(-23.577483))
                .body("'location'.'position'.'type'", containsString("Point"))
                .body("'location'.'location'.'x'", numberMatches(-46.694697))
                .body("'location'.'location'.'y'", numberMatches(-23.577483))
                .body("'location'.'location'.'coordinates'.size()", equalTo(2))
                .body("'location'.'location'.'coordinates'[0]", numberMatches(-46.694697))
                .body("'location'.'location'.'coordinates'[1]", numberMatches(-23.577483))
                .body("'location'.'location'.'type'", containsString("Point"));
        
        
        ValidatableResponse res_3 = given().accept("*/*")
                .delete(baseUrlOfSut + "/v1/hospitais/8/estoque/T")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 204, 401, 403).contains(res_3.extract().statusCode()));
        
        ValidatableResponse res_4 = given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(404.0))
                .body("'error'", containsString("Not Found"))
                .body("'message'", containsString("No message available"))
                .body("'path'", containsString("/v1/hospitais"));
        
        expectationHandler.expect(ems)
            /*
             Note: No supported codes appear to be defined. https://swagger.io/docs/specification/describing-responses/.
             This is somewhat unexpected, so the code below is likely to lead to a failed expectation
            */
            .that(sco, Arrays.asList().contains(res_4.extract().statusCode()));
        
        ValidatableResponse res_5 = given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais/pvm/proximidades")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 401, 403, 404).contains(res_5.extract().statusCode()));
        
        ValidatableResponse res_6 = given().accept("*/*")
                .delete(baseUrlOfSut + "/v1/hospitais/bu/estoque/Jem")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 204, 401, 403).contains(res_6.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_1() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"productType\": \"EVOMASTER\" " + 
                    " } ")
                .post(baseUrlOfSut + "/v1/hospitais/zo/estoque")
                .then()
                .statusCode(400)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(400.0))
                .body("'error'", containsString("Bad Request"))
                .body("'message'", containsString("JSON parse error: Cannot deserialize value of type `br.com.codenation.hospital.domain.ProductType` from String \"EVOMASTER\": value not one of declared Enum instance names: [BLOOD, COMMON]; nested exception is com.fasterxml.jackson.databind.exc.InvalidFormatException: Cannot deserialize value of type `br.com.codenation.hospital.domain.ProductType` from String \"EVOMASTER\": value not one of declared Enum instance names: [BLOOD, COMMON]\n at [Source: (PushbackInputStream); line: 1, column: 16] (through reference chain: br.com.codenation.hospital.dto.ProductDTO[\"productType\"])"))
                .body("'path'", containsString("/v1/hospitais/zo/estoque"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais/FkK1bqjzyzH9QP/pacientes/VLxnER")
                .then()
                .statusCode(404)
                .assertThat()
                .body(isEmptyOrNullString());
        
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais/rF3PT/pacientes")
                .then()
                .statusCode(404)
                .assertThat()
                .body(isEmptyOrNullString());
        
        
        ValidatableResponse res_3 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"address\": \"XJFqCFmoI\", " + 
                    " \"beds\": 818, " + 
                    " \"latitude\": \"w7Q9D\", " + 
                    " \"name\": \"xzKytzRd5C\" " + 
                    " } ")
                .post(baseUrlOfSut + "/v1/hospitais")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(404.0))
                .body("'error'", containsString("Not Found"))
                .body("'message'", containsString("No message available"))
                .body("'path'", containsString("/v1/hospitais"));
        
        expectationHandler.expect(ems)
            /*
             Note: No supported codes appear to be defined. https://swagger.io/docs/specification/describing-responses/.
             This is somewhat unexpected, so the code below is likely to lead to a failed expectation
            */
            .that(sco, Arrays.asList().contains(res_3.extract().statusCode()));
        
        ValidatableResponse res_4 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"active\": false, " + 
                    " \"birthDate\": \"1924-06-23T22:-1:39\", " + 
                    " \"cpf\": \"RzzItRW\", " + 
                    " \"entryDate\": \"2087-11-21T05:16:38\", " + 
                    " \"id\": \"TPcdmvd1N\" " + 
                    " } ")
                .put(baseUrlOfSut + "/v1/hospitais/lzN_zQ_i/pacientes/TPcdmvd1N")
                .then()
                .statusCode(400)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(400.0))
                .body("'error'", containsString("Bad Request"))
                .body("'message'", containsString("JSON parse error: Cannot deserialize value of type `java.util.Date` from String \"1924-06-23T22:-1:39\": not a valid representation (error: Failed to parse Date value '1924-06-23T22:-1:39': Cannot parse date \"1924-06-23T22:-1:39\": while it seems to fit format 'yyyy-MM-dd'T'HH:mm:ss.SSSZ', parsing fails (leniency? null)); nested exception is com.fasterxml.jackson.databind.exc.InvalidFormatException: Cannot deserialize value of type `java.util.Date` from String \"1924-06-23T22:-1:39\": not a valid representation (error: Failed to parse Date value '1924-06-23T22:-1:39': Cannot parse date \"1924-06-23T22:-1:39\": while it seems to fit format 'yyyy-MM-dd'T'HH:mm:ss.SSSZ', parsing fails (leniency? null))\n at [Source: (PushbackInputStream); line: 1, column: 30] (through reference chain: br.com.codenation.hospital.domain.Patient[\"birthDate\"])"))
                .body("'path'", containsString("/v1/hospitais/lzN_zQ_i/pacientes/TPcdmvd1N"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_4.extract().statusCode()));
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais/2/estoque")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("size()", equalTo(2))
                .body("[0].'name'", containsString("Alimento"))
                .body("[0].'description'", containsString("Maçã"))
                .body("[0].'quantity'", numberMatches(12.0))
                .body("[0].'productType'", containsString("COMMON"))
                .body("[0].'productName'", containsString("Alimento"))
                .body("[1].'name'", containsString("Banco de Sangue"))
                .body("[1].'description'", containsString("Sangue"))
                .body("[1].'quantity'", numberMatches(1.0))
                .body("[1].'productType'", containsString("BLOOD"))
                .body("[1].'productName'", containsString("Banco de Sangue"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_2() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais/MJztKebhuUX/leitos")
                .then()
                .statusCode(400)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(400.0))
                .body("'error'", containsString("Bad Request"))
                .body("'message'", containsString("Hospital não encontrado! ID:MJztKebhuUX"))
                .body("'path'", containsString("/v1/hospitais/MJztKebhuUX/leitos"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_3() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais/UMD6Eyr_9treC/hospitaisProximos?raio=0.4206064794970461")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_4() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/json")
                .body(" 411 ")
                .post(baseUrlOfSut + "/v1/hospitais/lS/transferencia/MiE0L2dj267H9L")
                .then()
                .statusCode(400)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(400.0))
                .body("'error'", containsString("Bad Request"))
                .body("'message'", containsString("Hospital não encontrado! ID:lS"))
                .body("'path'", containsString("/v1/hospitais/lS/transferencia/MiE0L2dj267H9L"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_5() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"description\": \"sNsp7V\", " + 
                    " \"id\": \"_3SjFTj542GX\", " + 
                    " \"name\": \"mdgNa33WRYQjx09\", " + 
                    " \"quantity\": 817 " + 
                    " } ")
                .put(baseUrlOfSut + "/v1/hospitais/peww/estoque/_3SjFTj542GX")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_6() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"availableBeds\": 191, " + 
                    " \"latitude\": \"5311I\", " + 
                    " \"longitude\": \"Ze\", " + 
                    " \"name\": \"Fo7t\" " + 
                    " } ")
                .put(baseUrlOfSut + "/v1/hospitais/O8ci2xh")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_7() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"id\": \"ShzhS\", " + 
                    " \"name\": \"vcqfhNOdI\" " + 
                    " } ")
                .post(baseUrlOfSut + "/v1/hospitais/ShzhS/estoque")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_8() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais/z/proximidades")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 401, 403, 404).contains(res_0.extract().statusCode()));
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais/DOASogU7f00fp/pacientes")
                .then()
                .statusCode(404)
                .assertThat()
                .body(isEmptyOrNullString());
        
    }
    
    
    @Test(timeout = 60000)
    public void test_9() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .delete(baseUrlOfSut + "/v1/hospitais/oJ6Fq/estoque/YI8YMazTWhL")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 204, 401, 403).contains(res_0.extract().statusCode()));
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais/bKaQ23G9Df")
                .then()
                .statusCode(404)
                .assertThat()
                .body(isEmptyOrNullString());
        
    }
    
    
    @Test(timeout = 60000)
    public void test_10() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"address\": \"A8SOxq6SVXvg1Yq\", " + 
                    " \"availableBeds\": 102, " + 
                    " \"latitude\": \"Ux6beiFh2HCkFNY\" " + 
                    " } ")
                .post(baseUrlOfSut + "/v1/hospitais")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(404.0))
                .body("'error'", containsString("Not Found"))
                .body("'message'", containsString("No message available"))
                .body("'path'", containsString("/v1/hospitais"));
        
        expectationHandler.expect(ems)
            /*
             Note: No supported codes appear to be defined. https://swagger.io/docs/specification/describing-responses/.
             This is somewhat unexpected, so the code below is likely to lead to a failed expectation
            */
            .that(sco, Arrays.asList().contains(res_0.extract().statusCode()));
        
        ValidatableResponse res_1 = given().accept("*/*")
                .delete(baseUrlOfSut + "/v1/hospitais/Nh0mvGWiQM2owoEu")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 204, 401, 403).contains(res_1.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_11() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"description\": \"FYMLfNe0SxHW\", " + 
                    " \"productType\": \"BLOOD\" " + 
                    " } ")
                .post(baseUrlOfSut + "/v1/hospitais/Ov3iZfkW/estoque")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
        
        ValidatableResponse res_1 = given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais/fkN0jxrJ/estoque")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 401, 403, 404).contains(res_1.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_12() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .delete(baseUrlOfSut + "/v1/hospitais/BoThymLXI/estoque/VKopWI3BFBi")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 204, 401, 403).contains(res_0.extract().statusCode()));
        
        ValidatableResponse res_1 = given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(404.0))
                .body("'error'", containsString("Not Found"))
                .body("'message'", containsString("No message available"))
                .body("'path'", containsString("/v1/hospitais"));
        
        expectationHandler.expect(ems)
            /*
             Note: No supported codes appear to be defined. https://swagger.io/docs/specification/describing-responses/.
             This is somewhat unexpected, so the code below is likely to lead to a failed expectation
            */
            .that(sco, Arrays.asList().contains(res_1.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_13() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"address\": \"bW0lkD4iwrawI\", " + 
                    " \"availableBeds\": 289, " + 
                    " \"name\": \"DxtOQvDJZI\" " + 
                    " } ")
                .post(baseUrlOfSut + "/v1/hospitais")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(404.0))
                .body("'error'", containsString("Not Found"))
                .body("'message'", containsString("No message available"))
                .body("'path'", containsString("/v1/hospitais"));
        
        expectationHandler.expect(ems)
            /*
             Note: No supported codes appear to be defined. https://swagger.io/docs/specification/describing-responses/.
             This is somewhat unexpected, so the code below is likely to lead to a failed expectation
            */
            .that(sco, Arrays.asList().contains(res_0.extract().statusCode()));
        
        ValidatableResponse res_1 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"productName\": \"aD\", " + 
                    " \"quantity\": 865 " + 
                    " } ")
                .put(baseUrlOfSut + "/v1/hospitais/hHxxuCo37XN/estoque/IvqBFlOA7Kj")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_1.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_14() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/json")
                .body(" 609 ")
                .post(baseUrlOfSut + "/v1/hospitais/Xk_sXo_ae/transferencia/uHX")
                .then()
                .statusCode(400)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(400.0))
                .body("'error'", containsString("Bad Request"))
                .body("'message'", containsString("Hospital não encontrado! ID:Xk_sXo_ae"))
                .body("'path'", containsString("/v1/hospitais/Xk_sXo_ae/transferencia/uHX"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
        
        ValidatableResponse res_1 = given().accept("application/json")
                .contentType("application/json")
                .body(" { " + 
                    " \"birthDate\": \"1980-11-12T12:01:27\", " + 
                    " \"cpf\": \"\", " + 
                    " \"gender\": \"\", " + 
                    " \"id\": \"x36t\", " + 
                    " \"location\": { " + 
                    " \"id\": \"lhQr33T8bflyw\", " + 
                    " \"locationCategory\": \"EVOMASTER\", " + 
                    " \"position\": { " + 
                    " \"x\": 0.4260823932391219 " + 
                    " } " + 
                    " } " + 
                    " } ")
                .post(baseUrlOfSut + "/v1/hospitais/x36t/pacientes/checkin")
                .then()
                .statusCode(400)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(400.0))
                .body("'error'", containsString("Bad Request"))
                .body("'message'", containsString("JSON parse error: Cannot deserialize value of type `br.com.codenation.hospital.domain.LocationCategory` from String \"EVOMASTER\": value not one of declared Enum instance names: [HOSPITAL, PATIENT]; nested exception is com.fasterxml.jackson.databind.exc.InvalidFormatException: Cannot deserialize value of type `br.com.codenation.hospital.domain.LocationCategory` from String \"EVOMASTER\": value not one of declared Enum instance names: [HOSPITAL, PATIENT]\n at [Source: (PushbackInputStream); line: 1, column: 126] (through reference chain: br.com.codenation.hospital.domain.Patient[\"location\"]->br.com.codenation.hospital.domain.Location[\"locationCategory\"])"))
                .body("'path'", containsString("/v1/hospitais/x36t/pacientes/checkin"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_1.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_15() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"entryDate\": \"2092-09-21T-1:10:15\", " + 
                    " \"gender\": \"_a6Eo0Ovvag2WXaw\", " + 
                    " \"id\": \"ooh1qmjyrJ9h3w\" " + 
                    " } ")
                .put(baseUrlOfSut + "/v1/hospitais/DELQxeX9r3kJ3ni/pacientes/ooh1qmjyrJ9h3w")
                .then()
                .statusCode(400)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(400.0))
                .body("'error'", containsString("Bad Request"))
                .body("'message'", containsString("JSON parse error: Cannot deserialize value of type `java.util.Date` from String \"2092-09-21T-1:10:15\": not a valid representation (error: Failed to parse Date value '2092-09-21T-1:10:15': Cannot parse date \"2092-09-21T-1:10:15\": while it seems to fit format 'yyyy-MM-dd'T'HH:mm:ss.SSSZ', parsing fails (leniency? null)); nested exception is com.fasterxml.jackson.databind.exc.InvalidFormatException: Cannot deserialize value of type `java.util.Date` from String \"2092-09-21T-1:10:15\": not a valid representation (error: Failed to parse Date value '2092-09-21T-1:10:15': Cannot parse date \"2092-09-21T-1:10:15\": while it seems to fit format 'yyyy-MM-dd'T'HH:mm:ss.SSSZ', parsing fails (leniency? null))\n at [Source: (PushbackInputStream); line: 1, column: 14] (through reference chain: br.com.codenation.hospital.domain.Patient[\"entryDate\"])"))
                .body("'path'", containsString("/v1/hospitais/DELQxeX9r3kJ3ni/pacientes/ooh1qmjyrJ9h3w"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
        
        ValidatableResponse res_1 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"address\": \"ZeKgb9y7\", " + 
                    " \"availableBeds\": 508, " + 
                    " \"id\": \"2B_hI\", " + 
                    " \"longitude\": \"Aq3iQjljn7EZy\" " + 
                    " } ")
                .post(baseUrlOfSut + "/v1/hospitais")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(404.0))
                .body("'error'", containsString("Not Found"))
                .body("'message'", containsString("No message available"))
                .body("'path'", containsString("/v1/hospitais"));
        
        expectationHandler.expect(ems)
            /*
             Note: No supported codes appear to be defined. https://swagger.io/docs/specification/describing-responses/.
             This is somewhat unexpected, so the code below is likely to lead to a failed expectation
            */
            .that(sco, Arrays.asList().contains(res_1.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_16() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(404.0))
                .body("'error'", containsString("Not Found"))
                .body("'message'", containsString("No message available"))
                .body("'path'", containsString("/v1/hospitais"));
        
        expectationHandler.expect(ems)
            /*
             Note: No supported codes appear to be defined. https://swagger.io/docs/specification/describing-responses/.
             This is somewhat unexpected, so the code below is likely to lead to a failed expectation
            */
            .that(sco, Arrays.asList().contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_17() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        given().accept("*/*")
                .contentType("application/json")
                .body(" \"XFme21\" ")
                .post(baseUrlOfSut + "/v1/hospitais/XFme21/pacientes/checkout")
                .then()
                .statusCode(404)
                .assertThat()
                .body(isEmptyOrNullString());
        
        
        ValidatableResponse res_1 = given().accept("*/*")
                .get(baseUrlOfSut + "/v1/hospitais")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(404.0))
                .body("'error'", containsString("Not Found"))
                .body("'message'", containsString("No message available"))
                .body("'path'", containsString("/v1/hospitais"));
        
        expectationHandler.expect(ems)
            /*
             Note: No supported codes appear to be defined. https://swagger.io/docs/specification/describing-responses/.
             This is somewhat unexpected, so the code below is likely to lead to a failed expectation
            */
            .that(sco, Arrays.asList().contains(res_1.extract().statusCode()));
    }


}