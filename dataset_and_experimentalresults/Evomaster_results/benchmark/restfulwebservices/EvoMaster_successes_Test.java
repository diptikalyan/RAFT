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
 * This file was automatically generated by EvoMaster on 2023-04-29T11:40:12.838+05:30[Asia/Calcutta]
 * <br>
 * The generated test suite contains 24 tests
 * <br>
 * Covered targets: 50
 * <br>
 * Used time: 0h 1m 0s
 * <br>
 * Needed budget for current results: 81%
 * <br>
 * This file contains test cases that represent successful calls.
 */
public class EvoMaster_successes_Test {

    
    private static String baseUrlOfSut = "http://localhost:8080";
    /** [ems] - expectations master switch - is the variable that activates/deactivates expectations individual test cases
    * by default, expectations are turned off. The variable needs to be set to [true] to enable expectations
    */
    private static boolean ems = false;
    /**
    * rso - response structure oracle - checking that the response objects match the responses defined in the schema
    */
    private static boolean rso = false;
    
    
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
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/users")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("size()", equalTo(309))
                .body("[0].'name'", containsString("52"))
                .body("[0].'birthDate'", containsString("2023-04-29T05:36:10.514+00:00"))
                .body("[0].'posts'", nullValue())
                .body("[1].'name'", nullValue())
                .body("[1].'birthDate'", nullValue())
                .body("[1].'posts'.size()", equalTo(0))
                .body("[2].'name'", nullValue())
                .body("[2].'birthDate'", containsString("1990-05-31T11:26:29.000+00:00"))
                .body("[2].'posts'.size()", equalTo(5))
                .body("[2].'posts'[0].'description'", containsString("cvAIcgJmz"))
                .body("[2].'posts'[1].'description'", containsString("qyGRdK8V8oFquX"))
                .body("[2].'posts'[2].'description'", nullValue())
                // Skipping assertions on the remaining 2 elements. This limit of 3 elements can be increased in the configurations
                ; // Skipping assertions on the remaining 306 elements. This limit of 3 elements can be increased in the configurations
        
    }
    
    
    @Test(timeout = 60000)
    public void test_1() throws Exception {
        
        given().accept("*/*")
                .header("X-API-VERSION", "1")
                .get(baseUrlOfSut + "/person/header")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("'name'", containsString("Bob Charlie"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_2() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/person/param?version=1")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("'name'", containsString("Bob Charlie"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_3() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/jpa/users/327")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/hal+json")
                .body("'name'", containsString("XWn6sn"))
                .body("'birthDate'", nullValue())
                .body("'posts'.size()", equalTo(1))
                .body("'posts'[0].'description'", nullValue());
        
    }
    
    
    @Test(timeout = 60000)
    public void test_4() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/hello-world")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("text/plain")
                .body(containsString("Hello World"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_5() throws Exception {
        
        given().accept("*/*")
                .delete(baseUrlOfSut + "/jpa/users/405")
                .then()
                .statusCode(200)
                .assertThat()
                .body(isEmptyOrNullString());
        
    }
    
    
    @Test(timeout = 60000)
    public void test_6() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/jpa/users/459/posts")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("size()", equalTo(0));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_7() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/hello-world-bean")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("'message'", containsString("Hello World"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_8() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/v1/person")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("'name'", containsString("Bob Charlie"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_9() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/hello-world-internationalized")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("text/plain")
                .body(containsString("Good Morning"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_10() throws Exception {
        
        given().accept("application/vnd.company.app-v1+json")
                .get(baseUrlOfSut + "/person/produces")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/vnd.company.app-v1+json")
                .body("'name'", containsString("Bob Charlie"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_11() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/v2/person")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("'name'.'firstName'", containsString("Bob"))
                .body("'name'.'lastName'", containsString("Charlie"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_12() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/jpa/users")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("size()", equalTo(276))
                .body("[0].'name'", nullValue())
                .body("[0].'birthDate'", nullValue())
                .body("[0].'posts'.size()", equalTo(0))
                .body("[1].'name'", nullValue())
                .body("[1].'birthDate'", nullValue())
                .body("[1].'posts'.size()", equalTo(1))
                .body("[1].'posts'[0].'description'", nullValue())
                .body("[2].'name'", containsString("Jam"))
                .body("[2].'birthDate'", containsString("2023-04-29T05:36:10.514+00:00"))
                .body("[2].'posts'.size()", equalTo(0))
                ; // Skipping assertions on the remaining 273 elements. This limit of 3 elements can be increased in the configurations
        
    }
    
    
    @Test(timeout = 60000)
    public void test_13() throws Exception {
        
        given().accept("*/*")
                .delete(baseUrlOfSut + "/users/182")
                .then()
                .statusCode(200)
                .assertThat()
                .body(isEmptyOrNullString());
        
    }
    
    
    @Test(timeout = 60000)
    public void test_14() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/users/155")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/hal+json")
                .body("'name'", nullValue())
                .body("'birthDate'", nullValue())
                .body("'posts'", nullValue());
        
    }
    
    
    @Test(timeout = 60000)
    public void test_15() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/hello-world/path-variable/kW")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("'message'", containsString("Hello World, kW"));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_16() throws Exception {
        
        given().accept("application/hal+json")
                .get(baseUrlOfSut + "/users/67/posts")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/hal+json")
                .body("'_embedded'.'posts'.size()", equalTo(0));
        
    }
    
    
    @Test(timeout = 60000)
    public void test_17() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .get(baseUrlOfSut + "/filtering-list")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("size()", equalTo(2))
                .body("[0].'field2'", containsString("value2"))
                .body("[0].'field3'", containsString("value3"))
                .body("[1].'field2'", containsString("value22"))
                .body("[1].'field3'", containsString("value32"));
        
        expectationHandler.expect(ems)
            .that(rso, ((Map) ((List) res_0.extract().response().jsonPath().getJsonObject("")).get(0)).keySet().containsAll(Arrays.asList()))
            .that(rso, ((Map) ((List) res_0.extract().response().jsonPath().getJsonObject("")).get(1)).keySet().containsAll(Arrays.asList()));
    }
    
    
    @Test(timeout = 60000)
    public void test_18() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .get(baseUrlOfSut + "/filtering")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("'field1'", containsString("value1"))
                .body("'field2'", containsString("value2"));
        
        expectationHandler.expect(ems)
            .that(rso, ((Map) res_0.extract().response().jsonPath().getJsonObject("")).keySet().containsAll(Arrays.asList()));
    }
    
    
    @Test(timeout = 60000)
    public void test_19() throws Exception {
        
        given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"id\": 942 " + 
                    " } ")
                .post(baseUrlOfSut + "/jpa/users")
                .then()
                .statusCode(201)
                .assertThat()
                .body(isEmptyOrNullString());
        
    }
    
    
    @Test(timeout = 60000)
    public void test_20() throws Exception {
        
        given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"id\": 174 " + 
                    " } ")
                .post(baseUrlOfSut + "/users")
                .then()
                .statusCode(201)
                .assertThat()
                .body(isEmptyOrNullString());
        
    }
    
    
    @Test(timeout = 60000)
    public void test_21() throws Exception {
        
        given().accept("*/*")
                .contentType("application/json")
                .body(" { " + 
                    " \"description\": \"h1tPxPHvxcF\", " + 
                    " \"id\": 538 " + 
                    " } ")
                .post(baseUrlOfSut + "/jpa/users/538/posts")
                .then()
                .statusCode(201)
                .assertThat()
                .body(isEmptyOrNullString());
        
    }
    
    
    @Test(timeout = 60000)
    public void test_22() throws Exception {
        
        given().accept("*/*")
                .delete(baseUrlOfSut + "/posts/421/user")
                .then()
                .statusCode(204)
                .assertThat()
                .body(isEmptyOrNullString());
        
    }
    
    
    @Test(timeout = 60000)
    public void test_23() throws Exception {
        
        given().accept("*/*")
                .delete(baseUrlOfSut + "/users/342/posts/KopQ")
                .then()
                .statusCode(204)
                .assertThat()
                .body(isEmptyOrNullString());
        
    }


}
