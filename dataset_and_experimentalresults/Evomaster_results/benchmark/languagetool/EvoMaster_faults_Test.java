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
 * This file was automatically generated by EvoMaster on 2023-04-25T14:25:53.549133+05:30[Asia/Kolkata]
 * <br>
 * The generated test suite contains 3 tests
 * <br>
 * Covered targets: 10
 * <br>
 * Used time: 0h 1m 0s
 * <br>
 * Needed budget for current results: 55%
 * <br>
 * This file contains test cases that are likely to indicate faults.
 */
public class EvoMaster_faults_Test {

    
    private static String baseUrlOfSut = "http://irlverifai.sl.cloud9.ibm.com:8010";
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
    
    
    
    
    
    
    
    
    @Test(timeout = 60000)
    public void test_0_with500() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        given().accept("application/json")
                .get(baseUrlOfSut + "/v2/languages")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("size()", equalTo(56))
                .body("[0].'name'", containsString("Arabic"))
                .body("[0].'code'", containsString("ar"))
                .body("[0].'longCode'", containsString("ar"))
                .body("[1].'name'", containsString("Asturian"))
                .body("[1].'code'", containsString("ast"))
                .body("[1].'longCode'", containsString("ast-ES"))
                .body("[2].'name'", containsString("Belarusian"))
                .body("[2].'code'", containsString("be"))
                .body("[2].'longCode'", containsString("be-BY"))
                ; // Skipping assertions on the remaining 53 elements. This limit of 3 elements can be increased in the configurations
        
        
        given().accept("application/json")
                .get(baseUrlOfSut + "/v2/languages")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("size()", equalTo(56))
                .body("[0].'name'", containsString("Arabic"))
                .body("[0].'code'", containsString("ar"))
                .body("[0].'longCode'", containsString("ar"))
                .body("[1].'name'", containsString("Asturian"))
                .body("[1].'code'", containsString("ast"))
                .body("[1].'longCode'", containsString("ast-ES"))
                .body("[2].'name'", containsString("Belarusian"))
                .body("[2].'code'", containsString("be"))
                .body("[2].'longCode'", containsString("be-BY"))
                ; // Skipping assertions on the remaining 53 elements. This limit of 3 elements can be increased in the configurations
        
        
        ValidatableResponse res_2 = given().accept("*/*")
                .contentType("application/x-www-form-urlencoded")
                .body("text=G&language=de-DE&dicts=Ey6iBndk&enabledRules=k7A6P8AQJV6rQDrb&enabledCategories=&disabledCategories=7UOENvH3i&enabledOnly=true&level=default")
                .post(baseUrlOfSut + "/v2/check")
                .then()
                .statusCode(500)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200).contains(res_2.extract().statusCode()));
        
        ValidatableResponse res_3 = given().accept("*/*")
                .contentType("application/x-www-form-urlencoded")
                .body("text=Zn&data=Afv0LEvOTiUM9&language=de-DE&motherTongue=dGRFB0OzQgaZbD&level=picky")
                .post(baseUrlOfSut + "/v2/check")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200).contains(res_3.extract().statusCode()));
        
        given().accept("application/json")
                .get(baseUrlOfSut + "/v2/languages")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("size()", equalTo(56))
                .body("[0].'name'", containsString("Arabic"))
                .body("[0].'code'", containsString("ar"))
                .body("[0].'longCode'", containsString("ar"))
                .body("[1].'name'", containsString("Asturian"))
                .body("[1].'code'", containsString("ast"))
                .body("[1].'longCode'", containsString("ast-ES"))
                .body("[2].'name'", containsString("Belarusian"))
                .body("[2].'code'", containsString("be"))
                .body("[2].'longCode'", containsString("be-BY"))
                ; // Skipping assertions on the remaining 53 elements. This limit of 3 elements can be increased in the configurations
        
        
        ValidatableResponse res_5 = given().accept("*/*")
                .contentType("application/x-www-form-urlencoded")
                .body("text=iV0RB98PocU0TF&data=BxAA9sEf9_gC7aM&language=en-US&dicts=0IpoM6I7BF3ie&preferredVariants=zwqJqfOF&disabledRules=qG&disabledCategories=ssISBHy&level=default")
                .post(baseUrlOfSut + "/v2/check")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200).contains(res_5.extract().statusCode()));
        
        ValidatableResponse res_6 = given().accept("*/*")
                .contentType("application/x-www-form-urlencoded")
                .body("text=&data=9e3y&language=EVOMASTER&dicts=u&motherTongue=&preferredVariants=aAdxprZY&enabledRules=43G&disabledRules=tIC&enabledCategories=tsT")
                .post(baseUrlOfSut + "/v2/check")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200).contains(res_6.extract().statusCode()));
        
        ValidatableResponse res_7 = given().accept("*/*")
                .contentType("application/x-www-form-urlencoded")
                .body("language=de-DE&enabledRules=xE5L8&disabledRules=2RrKFN7JS5Lpy_&enabledOnly=true&level=default")
                .post(baseUrlOfSut + "/v2/check")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200).contains(res_7.extract().statusCode()));
    }
    
    
    @Test(timeout = 60000)
    public void test_1() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        given().accept("application/json")
                .get(baseUrlOfSut + "/v2/languages")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("size()", equalTo(56))
                .body("[0].'name'", containsString("Arabic"))
                .body("[0].'code'", containsString("ar"))
                .body("[0].'longCode'", containsString("ar"))
                .body("[1].'name'", containsString("Asturian"))
                .body("[1].'code'", containsString("ast"))
                .body("[1].'longCode'", containsString("ast-ES"))
                .body("[2].'name'", containsString("Belarusian"))
                .body("[2].'code'", containsString("be"))
                .body("[2].'longCode'", containsString("be-BY"))
                ; // Skipping assertions on the remaining 53 elements. This limit of 3 elements can be increased in the configurations
        
        
        ValidatableResponse res_1 = given().accept("application/json")
                .contentType("application/x-www-form-urlencoded")
                .body("text=diXuXm&language=en-US&dicts=LVPVJ_bbAKYzOo&enabledRules=XNacD0B&level=default")
                .post(baseUrlOfSut + "/v2/check")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("'software'.'name'", containsString("LanguageTool"))
                .body("'software'.'version'", containsString("6.1"))
                .body("'software'.'buildDate'", containsString("2023-04-04 07:15:59 +0000"))
                .body("'software'.'apiVersion'", numberMatches(1.0))
                .body("'software'.'premium'", equalTo(false))
                .body("'software'.'premiumHint'", containsString("You might be missing errors only the Premium version can find. Contact us at support<at>languagetoolplus.com."))
                .body("'software'.'status'", containsString(""))
                .body("'warnings'.'incompleteResults'", equalTo(false))
                .body("'language'.'name'", containsString("English (US)"))
                .body("'language'.'code'", containsString("en-US"))
                .body("'language'.'detectedLanguage'.'name'", containsString("Italian"))
                .body("'language'.'detectedLanguage'.'code'", containsString("it"))
                .body("'language'.'detectedLanguage'.'confidence'", numberMatches(0.4305187))
                .body("'language'.'detectedLanguage'.'source'", containsString(""))
                .body("'matches'.size()", equalTo(1))
                .body("'matches'[0].'message'", containsString("Possible spelling mistake found."))
                .body("'matches'[0].'shortMessage'", containsString("Spelling mistake"))
                .body("'matches'[0].'replacements'.size()", equalTo(24))
                .body("'matches'[0].'replacements'[0].'value'", containsString("drum"))
                .body("'matches'[0].'replacements'[1].'value'", containsString("Linux"))
                .body("'matches'[0].'replacements'[2].'value'", containsString("Dixie"))
                // Skipping assertions on the remaining 21 elements. This limit of 3 elements can be increased in the configurations
                .body("'matches'[0].'offset'", numberMatches(0.0))
                .body("'matches'[0].'length'", numberMatches(6.0))
                .body("'matches'[0].'context'.'text'", containsString("diXuXm"))
                .body("'matches'[0].'context'.'offset'", numberMatches(0.0))
                .body("'matches'[0].'context'.'length'", numberMatches(6.0))
                .body("'matches'[0].'sentence'", containsString("diXuXm"))
                .body("'matches'[0].'type'.'typeName'", containsString("UnknownWord"))
                .body("'matches'[0].'rule'.'description'", containsString("Possible spelling mistake"))
                .body("'matches'[0].'rule'.'issueType'", containsString("misspelling"))
                .body("'matches'[0].'rule'.'category'.'name'", containsString("Possible Typo"))
                .body("'matches'[0].'ignoreForIncompleteSentence'", equalTo(false))
                .body("'matches'[0].'contextForSureMatch'", numberMatches(0.0))
                .body("'sentenceRanges'.size()", equalTo(1))
                .body("'sentenceRanges'[0].size()", equalTo(2))
                .body("'sentenceRanges'[0][0]", numberMatches(0.0))
                .body("'sentenceRanges'[0][1]", numberMatches(6.0));
        
        expectationHandler.expect(ems);
    }
    
    
    @Test(timeout = 60000)
    public void test_2() throws Exception {
        ExpectationHandler expectationHandler = expectationHandler();
        
        ValidatableResponse res_0 = given().accept("*/*")
                .contentType("application/x-www-form-urlencoded")
                .body("text=3DcvLpnJY&data=3Juiwl&language=en-US&motherTongue=xSTZkbEMw&enabledRules=J7K9H&disabledRules=MRB1FS_lCUmMtCAS&level=default")
                .post(baseUrlOfSut + "/v2/check")
                .then()
                .statusCode(400)
                .assertThat()
                .body(isEmptyOrNullString());
        
        expectationHandler.expect(ems)
            .that(sco, Arrays.asList(200).contains(res_0.extract().statusCode()));
    }


}