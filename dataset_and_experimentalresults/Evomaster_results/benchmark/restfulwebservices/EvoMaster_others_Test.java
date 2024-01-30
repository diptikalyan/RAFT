import  org.junit.AfterClass;
import  org.junit.BeforeClass;
import  org.junit.Before;
import  org.junit.Test;
import static org.junit.Assert.*;
import  java.util.Map;
import  java.util.List;
import static org.evomaster.client.java.controller.api.EMTestUtils.*;
import  org.evomaster.client.java.controller.SutHandler;
import  io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import  io.restassured.response.ValidatableResponse;
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
 * This file was automatically generated by EvoMaster on 2023-04-29T11:40:12.895+05:30[Asia/Calcutta]
 * <br>
 * The generated test suite contains 16 tests
 * <br>
 * Covered targets: 27
 * <br>
 * Used time: 0h 1m 0s
 * <br>
 * Needed budget for current results: 81%
 * <br>
 * This file contains test cases that represent failed calls, but not indicative of faults.
 */
public class EvoMaster_others_Test {

    
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
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/x-spring-data-compact+json")
                .body(" \"361\" ")
                .patch(baseUrlOfSut + "/posts/361/user")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 204, 401, 403).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_1() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .get(baseUrlOfSut + "/person/param?version=EVOMASTER")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_2() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/x-spring-data-compact+json")
                .body(" [ " + 
                    " \"gNQ5w8vJ\", " + 
                    " \"g9oSSoeh70MbQR\" " + 
                    " ] ")
                .post(baseUrlOfSut + "/users/985/posts")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_3() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"birthDate\": \"2056-06-00T23:54:27\", " + 
                    " \"id\": 669, " + 
                    " \"name\": \"NGQ3GtMM\" " + 
                    " } ")
                .post(baseUrlOfSut + "/users")
                .then()
                .statusCode(400)
                .assertThat()
                .contentType("application/json")
                .body("'message'", containsString("Validation Failed"))
                .body("'details'", containsString("org.springframework.validation.BeanPropertyBindingResult: 1 errors\nField error in object 'user' on field 'birthDate': rejected value [Thu Jun 01 05:24:27 IST 2056]; codes [Past.user.birthDate,Past.birthDate,Past.java.util.Date,Past]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [user.birthDate,birthDate]; arguments []; default message [birthDate]]; default message [must be a past date]"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_4() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/x-spring-data-compact+json")
                .body(" \"993\" ")
                .post(baseUrlOfSut + "/posts/993/user")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_5() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"birthDate\": \"2039-09-11T17:09:45\", " + 
                    " \"posts\": [ " + 
                    " { " + 
                    " \"id\": 755 " + 
                    " }, " + 
                    " { " + 
                    " \"description\": \"tWhX7UXSPh3\", " + 
                    " \"id\": 3 " + 
                    " }, " + 
                    " { " + 
                    " \"description\": \"Kgi51a2ZK31FY\" " + 
                    " } " + 
                    " ] " + 
                    " } ")
                .post(baseUrlOfSut + "/jpa/users")
                .then()
                .statusCode(400)
                .assertThat()
                .contentType("application/json")
                .body("'message'", containsString("Validation Failed"))
                .body("'details'", containsString("org.springframework.validation.BeanPropertyBindingResult: 1 errors\nField error in object 'user' on field 'birthDate': rejected value [Sun Sep 11 22:39:45 IST 2039]; codes [Past.user.birthDate,Past.birthDate,Past.java.util.Date,Past]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [user.birthDate,birthDate]; arguments []; default message [birthDate]]; default message [must be a past date]"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_6() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/x-spring-data-compact+json")
                .body(" [ " + 
                    " \"J\", " + 
                    " \"8CfPAMxscUkuD_A\", " + 
                    " \"b5d_us\" " + 
                    " ] ")
                .put(baseUrlOfSut + "/users/732/posts")
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
                .contentType("application/x-spring-data-compact+json")
                .body(" [ " + 
                    " \"5VWCw2zwuC\", " + 
                    " \"\", " + 
                    " \"K6Zi6ZLe5\", " + 
                    " \"O5KpQt\", " + 
                    " \"58fuh_2GhLWLCTcS\" " + 
                    " ] ")
                .patch(baseUrlOfSut + "/users/430/posts")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 204, 401, 403).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_8() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/x-spring-data-compact+json")
                .body(" \"614\" ")
                .put(baseUrlOfSut + "/posts/614/user")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 201, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_9() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/jpa/users/737")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'message'", containsString("id-737"))
                .body("'details'", containsString("uri=/jpa/users/737"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_10() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/jpa/users/884/posts")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'message'", containsString("id-884"))
                .body("'details'", containsString("uri=/jpa/users/884/posts"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_11() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/users/566")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'message'", containsString("id-566"))
                .body("'details'", containsString("uri=/users/566"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_12() throws Exception {
        
        given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"description\": \"8yERsyHlaWnZ\" " + 
                    " } ")
                .post(baseUrlOfSut + "/jpa/users/837/posts")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'message'", containsString("id-837"))
                .body("'details'", containsString("uri=/jpa/users/837/posts"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_13() throws Exception {
        
        given().accept("*/*")
                .header("X-API-VERSION", "EVOMASTER")
                .get(baseUrlOfSut + "/person/header")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'status'", numberMatches(404.0))
                .body("'error'", containsString("Not Found"))
                .body("'message'", containsString("No message available"))
                .body("'path'", containsString("/person/header"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_14() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .delete(baseUrlOfSut + "/users/943")
                .then()
                .statusCode(404)
                .assertThat()
                .contentType("application/json")
                .body("'message'", containsString("id-943"))
                .body("'details'", containsString("uri=/users/943"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 204, 401, 403).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_15() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .delete(baseUrlOfSut + "/users/339/posts")
                .then()
                .statusCode(405)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 204, 401, 403).contains(res_0.extract().statusCode()));
    }


}
