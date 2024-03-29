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
 * This file was automatically generated by EvoMaster on 2023-04-25T14:21:06.427465+05:30[Asia/Kolkata]
 * <br>
 * The generated test suite contains 2 tests
 * <br>
 * Covered targets: 4
 * <br>
 * Used time: 0h 1m 0s
 * <br>
 * Needed budget for current results: 100%
 * <br>
 * This file contains test cases that represent successful calls.
 */
public class EvoMaster_successes_Test {

    
    private static String baseUrlOfSut = "http://irlverifai.sl.cloud9.ibm.com:6060/rest";
    
    
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
                .get(baseUrlOfSut + "/v2/name/V?" + 
                    "fields=OAKZYgK3Qj2b&" + 
                    "fullText=false")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("size()", equalTo(42))
                .body("'[0]'.isEmpty()", is(true))
                .body("'[1]'.isEmpty()", is(true))
                .body("'[2]'.isEmpty()", is(true))
                ; // Skipping assertions on the remaining 39 elements. This limit of 3 elements can be increased in the configurations
        
    }
    
    
    @Test(timeout = 60000)
    public void test_1() throws Exception {
        
        given().accept("*/*")
                .get(baseUrlOfSut + "/v1/all")
                .then()
                .statusCode(200)
                .assertThat()
                .contentType("application/json")
                .body("size()", equalTo(250))
                .body("[0].'name'", containsString("Afghanistan"))
                .body("[0].'topLevelDomain'.size()", equalTo(1))
                .body("[0].'topLevelDomain'", hasItems(".af"))
                .body("[0].'alpha2Code'", containsString("AF"))
                .body("[0].'alpha3Code'", containsString("AFG"))
                .body("[0].'callingCodes'.size()", equalTo(1))
                .body("[0].'callingCodes'", hasItems("93"))
                .body("[0].'capital'", containsString("Kabul"))
                .body("[0].'altSpellings'.size()", equalTo(2))
                .body("[0].'altSpellings'", hasItems("AF", "Afġānistān"))
                .body("[0].'region'", containsString("Asia"))
                .body("[0].'subregion'", containsString("Southern Asia"))
                .body("[0].'population'", numberMatches(2.60231E7))
                .body("[0].'latlng'.size()", equalTo(2))
                .body("[0].'latlng'[0]", numberMatches(33.0))
                .body("[0].'latlng'[1]", numberMatches(65.0))
                .body("[0].'demonym'", containsString("Afghan"))
                .body("[0].'area'", numberMatches(652230.0))
                .body("[0].'gini'", numberMatches(27.8))
                .body("[0].'timezones'.size()", equalTo(1))
                .body("[0].'timezones'", hasItems("UTC+04:30"))
                .body("[0].'borders'.size()", equalTo(6))
                .body("[0].'borders'", hasItems("IRN", "PAK", "TKM", "UZB", "TJK", "CHN"))
                .body("[0].'nativeName'", containsString("افغانستان"))
                .body("[0].'numericCode'", containsString("004"))
                .body("[0].'currencies'.size()", equalTo(1))
                .body("[0].'currencies'", hasItems("AFN"))
                .body("[0].'languages'.size()", equalTo(3))
                .body("[0].'languages'", hasItems("ps", "uz", "tk"))
                .body("[0].'translations'.'de'", containsString("Afghanistan"))
                .body("[0].'translations'.'es'", containsString("Afganistán"))
                .body("[0].'translations'.'fr'", containsString("Afghanistan"))
                .body("[0].'translations'.'ja'", containsString("アフガニスタン"))
                .body("[0].'translations'.'it'", containsString("Afghanistan"))
                .body("[0].'relevance'", containsString("0"))
                .body("[1].'name'", containsString("Åland Islands"))
                .body("[1].'topLevelDomain'.size()", equalTo(1))
                .body("[1].'topLevelDomain'", hasItems(".ax"))
                .body("[1].'alpha2Code'", containsString("AX"))
                .body("[1].'alpha3Code'", containsString("ALA"))
                .body("[1].'callingCodes'.size()", equalTo(1))
                .body("[1].'callingCodes'", hasItems("358"))
                .body("[1].'capital'", containsString("Mariehamn"))
                .body("[1].'altSpellings'.size()", equalTo(4))
                .body("[1].'altSpellings'", hasItems("AX", "Aaland", "Aland", "Ahvenanmaa"))
                .body("[1].'region'", containsString("Europe"))
                .body("[1].'subregion'", containsString("Northern Europe"))
                .body("[1].'population'", numberMatches(28875.0))
                .body("[1].'latlng'.size()", equalTo(2))
                .body("[1].'latlng'[0]", numberMatches(60.116667))
                .body("[1].'latlng'[1]", numberMatches(19.9))
                .body("[1].'demonym'", containsString("Ålandish"))
                .body("[1].'area'", numberMatches(1580.0))
                .body("[1].'gini'", nullValue())
                .body("[1].'timezones'.size()", equalTo(1))
                .body("[1].'timezones'", hasItems("UTC+02:00"))
                .body("[1].'borders'.size()", equalTo(0))
                .body("[1].'nativeName'", containsString("Åland"))
                .body("[1].'numericCode'", containsString("248"))
                .body("[1].'currencies'.size()", equalTo(1))
                .body("[1].'currencies'", hasItems("EUR"))
                .body("[1].'languages'.size()", equalTo(1))
                .body("[1].'languages'", hasItems("sv"))
                .body("[1].'translations'.'de'", containsString("Åland"))
                .body("[1].'translations'.'es'", containsString("Alandia"))
                .body("[1].'translations'.'fr'", containsString("Åland"))
                .body("[1].'translations'.'ja'", containsString("オーランド諸島"))
                .body("[1].'translations'.'it'", containsString("Isole Aland"))
                .body("[1].'relevance'", containsString("0"))
                .body("[2].'name'", containsString("Albania"))
                .body("[2].'topLevelDomain'.size()", equalTo(1))
                .body("[2].'topLevelDomain'", hasItems(".al"))
                .body("[2].'alpha2Code'", containsString("AL"))
                .body("[2].'alpha3Code'", containsString("ALB"))
                .body("[2].'callingCodes'.size()", equalTo(1))
                .body("[2].'callingCodes'", hasItems("355"))
                .body("[2].'capital'", containsString("Tirana"))
                .body("[2].'altSpellings'.size()", equalTo(4))
                .body("[2].'altSpellings'", hasItems("AL", "Shqipëri", "Shqipëria", "Shqipnia"))
                .body("[2].'region'", containsString("Europe"))
                .body("[2].'subregion'", containsString("Southern Europe"))
                .body("[2].'population'", numberMatches(2893005.0))
                .body("[2].'latlng'.size()", equalTo(2))
                .body("[2].'latlng'[0]", numberMatches(41.0))
                .body("[2].'latlng'[1]", numberMatches(20.0))
                .body("[2].'demonym'", containsString("Albanian"))
                .body("[2].'area'", numberMatches(28748.0))
                .body("[2].'gini'", numberMatches(34.5))
                .body("[2].'timezones'.size()", equalTo(1))
                .body("[2].'timezones'", hasItems("UTC+01:00"))
                .body("[2].'borders'.size()", equalTo(4))
                .body("[2].'borders'", hasItems("MNE", "GRC", "MKD", "KOS"))
                .body("[2].'nativeName'", containsString("Shqipëria"))
                .body("[2].'numericCode'", containsString("008"))
                .body("[2].'currencies'.size()", equalTo(1))
                .body("[2].'currencies'", hasItems("ALL"))
                .body("[2].'languages'.size()", equalTo(1))
                .body("[2].'languages'", hasItems("sq"))
                .body("[2].'translations'.'de'", containsString("Albanien"))
                .body("[2].'translations'.'es'", containsString("Albania"))
                .body("[2].'translations'.'fr'", containsString("Albanie"))
                .body("[2].'translations'.'ja'", containsString("アルバニア"))
                .body("[2].'translations'.'it'", containsString("Albania"))
                .body("[2].'relevance'", containsString("0"))
                ; // Skipping assertions on the remaining 247 elements. This limit of 3 elements can be increased in the configurations
        
    }


}
