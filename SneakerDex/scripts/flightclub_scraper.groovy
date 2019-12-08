
@Grapes(
	@Grab(group='org.codehaus.groovy.modules.http-builder', module='http-builder', version='0.6')
)
import groovy.xml.*
import groovy.json.*
import groovyx.net.http.HTTPBuilder
import static groovyx.net.http.Method.GET
import static groovyx.net.http.ContentType.TEXT

class Shoe{
	String NAME
  String IMAGE_URL
}

SHOE_ARRAY = [];
def getShoes(fileName){
  // def tagsoupParser = new org.ccil.cowan.tagsoup.Parser()
  // //important to get rid of the html namespace
  // tagsoupParser.setFeature(tagsoupParser.namespacesFeature, false)
  // def slurper = new XmlSlurper(tagsoupParser)
  // def htmlRoot = slurper.parse(fileName)
  // def pageString = htmlRoot.toString()
  // println pageString
  def html = new File(fileName).getText()
  def findCool = (html =~ /(http:\/\/www.flightclub.com\/air-jordan.*?)"/)
  // def findCool = ('groovy, java and grails rock!' =~ /gr\w{4}/)

  findCool.each{
    def url = it[0].minus('"')

    // println url
    def isUrl = (url =~ /http:\/\/www.flightclub.com\/air-jordan-[0-9]{1,2}.*/)

    if(isUrl.size() > 0){
      println url
    }
  }
}

def getUrl(url){
  def http = new HTTPBuilder()

  http.request( url, GET, TEXT ) { req ->
    response.success = { resp, reader ->
      assert resp.statusLine.statusCode == 200
      return reader.text
    }

    response.'404' = {
      println 'Not found'
    }
  }
}

def getToeInfo(text){
  def getShoeName = (text =~ /<div class=".*product-name hidden-desktop.*".*>([\s\S]*?)<\/div>/)
  def NEW_TOE = new Shoe()
  getShoeName.each{
    def shoeDetails = it[1].replaceAll("[\n\r]", "")
    shoeDetails = shoeDetails.replaceAll(/&quot;/, '"')
    // println shoeDetails
    def name = (shoeDetails =~ /<h1>(.*)<\/h1>/)
    NEW_TOE.NAME = name[0][1]
  }
  def getShoeImage = (text =~ /<img .* src=(.*)data-id/ )
  NEW_TOE.IMAGE_URL = getShoeImage[0][1]

  SHOE_ARRAY.add(NEW_TOE)
}

// def text = getUrl("http://www.flightclub.com/air-jordan-11-retro-white-legend-blue-012088")

getShoes("Air_Jordans_Flight_Club.html")
def html = new File("space_jam.html").getText()
// getToeInfo(text)
getToeInfo(html)
SHOE_ARRAY.each{
  println it.NAME
  println it.IMAGE_URL

}
