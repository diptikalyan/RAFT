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
 * This file was automatically generated by EvoMaster on 2023-04-29T11:40:12.939+05:30[Asia/Calcutta]
 * <br>
 * The generated test suite contains 4 tests
 * <br>
 * Covered targets: 13
 * <br>
 * Used time: 0h 1m 0s
 * <br>
 * Needed budget for current results: 81%
 * <br>
 * This file contains one example of each category of fault. The test cases in this file are a subset of the set of test cases likely to indicate faults.
 */
public class EvoMaster_fault_representatives_Test {

    
    private static String baseUrlOfSut = "http://localhost:8080";
    /** [ems] - expectations master switch - is the variable that activates/deactivates expectations individual test cases
    * by default, expectations are turned off. The variable needs to be set to [true] to enable expectations
    */
    private static boolean ems = false;
    /**
    * sco - supported code oracle - checking that the response status code is among those supported according to the schema
    */
    private static boolean sco = false;
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
    
    
    
    
    
    
    
    
    /**
    * [test_0_with500] is a part of 1 or more clusters, as defined by the selected clustering options. 
    * ErrorText_0
    */
    @Test(timeout = 60000)
    public void test_0_with500() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .get(baseUrlOfSut + "/users/785/posts/A91A")
                .then()
                .statusCode(500)
                .assertThat()
                .contentType("application/json")
                .body("'message'", containsString("EntityRepresentationModel not found!"))
                .body("'details'", containsString("uri=/users/785/posts/A91A"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    /**
    * [test_1_with500] is a part of 1 or more clusters, as defined by the selected clustering options. 
    * ErrorText_1
    */
    @Test(timeout = 60000)
    public void test_1_with500() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .delete(baseUrlOfSut + "/jpa/users/369")
                .then()
                .statusCode(500)
                .assertThat()
                .contentType("application/json")
                .body("'message'", containsString("No class com.in28minutes.rest.webservices.restfulwebservices.user.User entity with id 369 exists!"))
                .body("'details'", containsString("uri=/jpa/users/369"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 204, 401, 403).contains(res_0.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_2() throws Exception {
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
    public void test_3() throws Exception {
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


}
