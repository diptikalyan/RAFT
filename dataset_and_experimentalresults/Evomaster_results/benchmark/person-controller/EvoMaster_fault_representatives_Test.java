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
 * This file was automatically generated by EvoMaster on 2022-11-08T12:50:51.704669+05:30[Asia/Kolkata]
 * <br>
 * The generated test suite contains 3 tests
 * <br>
 * Covered targets: 11
 * <br>
 * Used time: 0h 16m 44s
 * <br>
 * Needed budget for current results: 89%
 * <br>
 * This file contains one example of each category of fault. The test cases in this file are a subset of the set of test cases likely to indicate faults.
 */
public class EvoMaster_fault_representatives_Test {

    
    private static String baseUrlOfSut = "http://localhost:50111";
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
                .get(baseUrlOfSut + "/api/person/RTC_nZLevdcmH")
                .then()
                .statusCode(500)
                .assertThat()
                .contentType("application/json")
                .body("'cause'", nullValue())
                .body("'stackTrace'.size()", equalTo(53))
                .body("'stackTrace'[0].'classLoaderName'", containsString("app"))
                .body("'stackTrace'[0].'moduleName'", nullValue())
                .body("'stackTrace'[0].'moduleVersion'", nullValue())
                .body("'stackTrace'[0].'methodName'", containsString("parseHexString"))
                .body("'stackTrace'[0].'fileName'", containsString("ObjectId.java"))
                .body("'stackTrace'[0].'lineNumber'", numberMatches(363.0))
                .body("'stackTrace'[0].'nativeMethod'", equalTo(false))
                .body("'stackTrace'[0].'className'", containsString("org.bson.types.ObjectId"))
                .body("'stackTrace'[1].'classLoaderName'", containsString("app"))
                .body("'stackTrace'[1].'moduleName'", nullValue())
                .body("'stackTrace'[1].'moduleVersion'", nullValue())
                .body("'stackTrace'[1].'methodName'", containsString("<init>"))
                .body("'stackTrace'[1].'fileName'", containsString("ObjectId.java"))
                .body("'stackTrace'[1].'lineNumber'", numberMatches(190.0))
                .body("'stackTrace'[1].'nativeMethod'", equalTo(false))
                .body("'stackTrace'[1].'className'", containsString("org.bson.types.ObjectId"))
                .body("'stackTrace'[2].'classLoaderName'", containsString("app"))
                .body("'stackTrace'[2].'moduleName'", nullValue())
                .body("'stackTrace'[2].'moduleVersion'", nullValue())
                .body("'stackTrace'[2].'methodName'", containsString("findOne"))
                .body("'stackTrace'[2].'fileName'", containsString("MongoDBPersonRepository.java"))
                .body("'stackTrace'[2].'lineNumber'", numberMatches(85.0))
                .body("'stackTrace'[2].'nativeMethod'", equalTo(false))
                .body("'stackTrace'[2].'className'", containsString("com.mongodb.starter.repositories.MongoDBPersonRepository"))
                // Skipping assertions on the remaining 50 elements. This limit of 3 elements can be increased in the configurations
                .body("'message'", containsString("invalid hexadecimal representation of an ObjectId: [RTC_nZLevdcmH]"))
                .body("'suppressed'.size()", equalTo(0))
                .body("'localizedMessage'", containsString("invalid hexadecimal representation of an ObjectId: [RTC_nZLevdcmH]"));
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200, 401, 403, 404).contains(res_0.extract().statusCode()));
    }
    
    
    
    
    @Test(timeout = 60000)
    public void test_2() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .get(baseUrlOfSut + "/api/persons/count")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body(containsString("71"));
        
        expectationHandler.expect(ems);
    }


}
