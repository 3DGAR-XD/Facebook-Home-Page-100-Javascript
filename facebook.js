/*

~ Facebook Home Page 100% on Javascript
~ This project is made for measure my skills in Javascript
~ I will not use mediaqueries (The optime resolution is 1280x800)
~ Edgar de Jesús Luna Chima Web Developer Junior 2021
~ I hope you like it <3

*/

// Tag creation

console.log("Creating Elements")
const metaUTF8 = document.createElement("meta")
const linkShortcutImage = document.createElement("link")
const title = document.createElement("title")
const logoContainer = document.createElement("div")
const facebookLogo = document.createElement("img")
const h2 = document.createElement("h2")
const formRegister = document.createElement("form")
const inputEmail = document.createElement("input")
const inputPassword = document.createElement("input")
const inputSubmit = document.createElement("input")
const divSeparator = document.createElement("div")
const lostPassword = document.createElement("a")
const createNewAccount = document.createElement("a")
const pageRegister = document.createElement("a")
const footer = document.createElement("footer")
const languageList = document.createElement("ul")
const languageSpanish = document.createElement("li")
const languageEnglish = document.createElement("li")
const languageFrench = document.createElement("li")
const languagePortuguese = document.createElement("li")
const languageItalian = document.createElement("li")
const languageGerman = document.createElement("li")
const languageArab = document.createElement("li")
const languageHindu = document.createElement("li")
const languageSimplifiedChinese = document.createElement("li")
const languageJapanese = document.createElement("li")
const moreLanguages = document.createElement("a")
const tagIgnore = document.createElement("ul")
const tagRegister = document.createElement("li")
const tagLogIn = document.createElement("li")
const tagMessenger = document.createElement("li")
const tagFacebookLite = document.createElement("li")
const tagWatch = document.createElement("li")
const tagPeople = document.createElement("li")
const tagPages = document.createElement("li")
const tagPagesCategories = document.createElement("li")
const tagPlaces = document.createElement("li")
const tagGames = document.createElement("li")
const tagLocations = document.createElement("li")
const tagMarketplace = document.createElement("li")
const tagPay = document.createElement("li")
const tagGroups = document.createElement("li")
const tagJobs = document.createElement("li")
const tagOculus = document.createElement("li")
const tagPortal = document.createElement("li")
const tagInstagram = document.createElement("li")
const tagLocal = document.createElement("li")
const tagFundraisers = document.createElement("li")
const tagServices = document.createElement("li")
const tagVotingInfoCenter = document.createElement("li")
const tagAbout = document.createElement("li")
const tagCreateAd = document.createElement("li")
const tagCreatePage = document.createElement("li")
const tagDevelopers = document.createElement("li")
const tagCareers = document.createElement("li")
const tagPrivacy = document.createElement("li")
const tagCookies = document.createElement("li")
const tagAdChoice = document.createElement("li")
const imgAdChoice = document.createElement("img")
const tagTerms = document.createElement("li")
const tagHelp = document.createElement("li")
const anchorLanguageSpanish = document.createElement("a")
const anchorLanguageEnglish = document.createElement("a")
const anchorLanguageFrench = document.createElement("a")
const anchorLanguagePortuguese = document.createElement("a")
const anchorLanguageItalian = document.createElement("a")
const anchorLanguageGerman = document.createElement("a")
const anchorLanguageArab = document.createElement("a")
const anchorLanguageHindu = document.createElement("a")
const anchorLanguageSimplifiedChinese = document.createElement("a")
const anchorLanguageJapanese = document.createElement("a")
const anchorTagRegister = document.createElement("a")
const anchorTagLogIn = document.createElement("a")
const anchorTagMessenger = document.createElement("a")
const anchorTagFacebookLite = document.createElement("a")
const anchorTagWatch = document.createElement("a")
const anchorTagPeople = document.createElement("a")
const anchorTagPages = document.createElement("a")
const anchorTagPagesCategories = document.createElement("a")
const anchorTagPlaces = document.createElement("a")
const anchorTagGames = document.createElement("a")
const anchorTagLocations = document.createElement("a")
const anchorTagMarketplace = document.createElement("a")
const anchorTagPay = document.createElement("a")
const anchorTagGroups = document.createElement("a")
const anchorTagJobs = document.createElement("a")
const anchorTagOculus = document.createElement("a")
const anchorTagPortal = document.createElement("a")
const anchorTagInstagram = document.createElement("a")
const anchorTagLocal = document.createElement("a")
const anchorTagFundraisers = document.createElement("a")
const anchorTagServices = document.createElement("a")
const anchorTagVotingInfoCenter = document.createElement("a")
const anchorTagAbout = document.createElement("a")
const anchorTagCreateAd = document.createElement("a")
const anchorTagCreatePage = document.createElement("a")
const anchorTagDevelopers = document.createElement("a")
const anchorTagCareers = document.createElement("a")
const anchorTagPrivacy = document.createElement("a")
const anchorTagCookies = document.createElement("a")
const anchorTagAdChoice = document.createElement("a")
const anchorTagTerms = document.createElement("a")
const anchorTagHelp = document.createElement("a")
console.log("Elements Created Sucefully")

// Text Node Creation

console.log("Creating Text")
const textTitle = document.createTextNode("Facebook - Inicia sesión o Regístrate.")
const textH2 = document.createTextNode("Connect with friends and the world around you on Facebook.")
const textInputSubmit = document.createTextNode("Log In")
const textLostPassword = document.createTextNode("Forgot Password?")
const textCreateNewAccount = document.createTextNode("Create New Account")
const textPageRegister = document.createTextNode("Create a Page")
const textLanguageSpanish = document.createTextNode("Español")
const textLanguageEnglish = document.createTextNode("English (US)")
const textLanguageFrench = document.createTextNode("Français (France)")
const textLanguagePortuguese = document.createTextNode("Português (Brasil)")
const textLanguageItalian = document.createTextNode("Italiano")
const textLanguageGerman = document.createTextNode("Deutsch")
const textLanguageArab = document.createTextNode("لعربية")
const textLanguageHindu = document.createTextNode("हिन")
const textLanguageSimplifiedChinese = document.createTextNode("中文(简体)")
const textLanguageJapanese = document.createTextNode("日本語")
const textTagRegister = document.createTextNode("Sign Up")
const textTagLogIn = document.createTextNode("Log In")
const textTagMessenger = document.createTextNode("Messenger")
const textTagFacebookLite = document.createTextNode("Facebook Lite")
const textTagWatch = document.createTextNode("Watch")
const textTagPeople = document.createTextNode("People")
const textTagPages = document.createTextNode("Pages")
const textTagPagesCategories = document.createTextNode("Page Categories")
const textTagPlaces = document.createTextNode("Places")
const textTagGames = document.createTextNode("Games")
const textTagLocations = document.createTextNode("Locations")
const textTagMarketplace = document.createTextNode("Marketplace")
const textTagPay = document.createTextNode("Facebook Pay")
const textTagGroups = document.createTextNode("Groups")
const textTagJobs = document.createTextNode("Jobs")
const textTagOculus = document.createTextNode("Oculus")
const textTagPortal = document.createTextNode("Portal")
const textTagInstagram = document.createTextNode("Instagram")
const textTagLocal = document.createTextNode("Local")
const textTagFundraisers = document.createTextNode("Fundraisers")
const textTagServices = document.createTextNode("Services")
const textTagVotingInfoCenter = document.createTextNode("Voting Information Center")
const textTagAbout = document.createTextNode("About")
const textTagCreateAd = document.createTextNode("Create Ad")
const textTagCreatePage = document.createTextNode("Create Page")
const textTagDevelopers = document.createTextNode("Developers")
const textTagCareers = document.createTextNode("Careers")
const textTagPrivacy = document.createTextNode("Privacy")
const textTagCookies = document.createTextNode("Cookies")
const textTagAdChoice = document.createTextNode("Ad Choices")
const textTagTerms = document.createTextNode("Terms")
const textTagHelp = document.createTextNode("Help")
console.log("Texts Created Sucefully")

// Append text to nodes

console.log("Appending Text")
const titleFinal = title.appendChild(textTitle).textContent
const h2Final = h2.appendChild(textH2)
const inputSubmitFinal = inputSubmit.appendChild(textInputSubmit)
const lostPasswordFinal = lostPassword.appendChild(textLostPassword)
const createNewAccountFinal = createNewAccount.appendChild(textCreateNewAccount)
const pageRegisterFinal = pageRegister.appendChild(textPageRegister)
const spanish = anchorLanguageSpanish.appendChild(textLanguageSpanish)
const english = anchorLanguageEnglish.appendChild(textLanguageEnglish)
const french = anchorLanguageFrench.appendChild(textLanguageFrench)
const portuguese = anchorLanguagePortuguese.appendChild(textLanguagePortuguese)
const italian = anchorLanguageItalian.appendChild(textLanguageItalian)
const german = anchorLanguageGerman.appendChild(textLanguageGerman)
const arab = anchorLanguageArab.appendChild(textLanguageArab)
const hindu = anchorLanguageHindu.appendChild(textLanguageHindu)
const simplifiedChinese = anchorLanguageSimplifiedChinese.appendChild(textLanguageSimplifiedChinese)
const japanese = anchorLanguageJapanese.appendChild(textLanguageJapanese)
const register = anchorTagRegister.appendChild(textTagRegister)
const logIn = anchorTagLogIn.appendChild(textTagLogIn)
const messenger = anchorTagMessenger.appendChild(textTagMessenger)
const facebookLite = anchorTagFacebookLite.appendChild(textTagFacebookLite)
const watch = anchorTagWatch.appendChild(textTagWatch)
const people = anchorTagPeople.appendChild(textTagPeople)
const pages = anchorTagPages.appendChild(textTagPages)
const pagesCategories = anchorTagPagesCategories.appendChild(textTagPagesCategories)
const places = anchorTagPlaces.appendChild(textTagPlaces)
const games = anchorTagGames.appendChild(textTagGames)
const locations = anchorTagLocations.appendChild(textTagLocations)
const marketplace = anchorTagMarketplace.appendChild(textTagMarketplace)
const pay = anchorTagPay.appendChild(textTagPay)
const groups = anchorTagGroups.appendChild(textTagGroups)
const jobs = anchorTagJobs.appendChild(textTagJobs)
const oculus = anchorTagOculus.appendChild(textTagOculus)
const portal = anchorTagPortal.appendChild(textTagPortal)
const instagram = anchorTagInstagram.appendChild(textTagInstagram)
const local = anchorTagLocal.appendChild(textTagLocal)
const fundraisers = anchorTagFundraisers.appendChild(textTagFundraisers)
const services = anchorTagServices.appendChild(textTagServices)
const votingInfoCenter = anchorTagVotingInfoCenter.appendChild(textTagVotingInfoCenter)
const about = anchorTagAbout.appendChild(textTagAbout)
const createAd = anchorTagCreateAd.appendChild(textTagCreateAd)
const createPage = anchorTagCreatePage.appendChild(textTagCreatePage)
const developers = anchorTagDevelopers.appendChild(textTagDevelopers)
const careers = anchorTagCareers.appendChild(textTagCareers)
const privacy = anchorTagPrivacy.appendChild(textTagPrivacy)
const cookies = anchorTagCookies.appendChild(textTagCookies)
const adChoice = anchorTagAdChoice.appendChild(textTagAdChoice)
const terms = anchorTagTerms.appendChild(textTagTerms)
const help = anchorTagHelp.appendChild(textTagHelp)
console.log("Text Appended Sucefully")

// Append to the parents nodes

console.log("Appending Elements")
document.title = titleFinal
document.head.appendChild(linkShortcutImage)
document.body.appendChild(facebookLogo)
document.body.appendChild(h2)
document.body.appendChild(formRegister)
formRegister.appendChild(inputEmail)
formRegister.appendChild(inputPassword)
formRegister.appendChild(inputSubmit)
formRegister.appendChild(divSeparator)
formRegister.appendChild(lostPassword)
formRegister.appendChild(createNewAccount)
document.body.appendChild(pageRegister)
document.write(" for a celebrity, band or business.")
document.body.appendChild(footer)
footer.appendChild(languageList)
languageList.appendChild(languageSpanish)
languageSpanish.appendChild(anchorLanguageSpanish)
languageList.appendChild(languageEnglish)
languageEnglish.appendChild(anchorLanguageEnglish)
languageList.appendChild(languageFrench)
languageFrench.appendChild(anchorLanguageFrench)
languageList.appendChild(languagePortuguese)
languagePortuguese.appendChild(anchorLanguagePortuguese)
languageList.appendChild(languageItalian)
languageItalian.appendChild(anchorLanguageItalian)
languageList.appendChild(languageGerman)
languageGerman.appendChild(anchorLanguageGerman)
languageList.appendChild(languageArab)
languageArab.appendChild(anchorLanguageArab)
languageList.appendChild(languageHindu)
languageHindu.appendChild(anchorLanguageHindu)
languageList.appendChild(languageSimplifiedChinese)
languageSimplifiedChinese.appendChild(anchorLanguageSimplifiedChinese)
languageList.appendChild(languageJapanese)
languageJapanese.appendChild(anchorLanguageJapanese)
footer.appendChild(divSeparator)
footer.appendChild(tagIgnore)
tagIgnore.appendChild(tagRegister)
tagRegister.appendChild(anchorTagRegister)
tagIgnore.appendChild(tagLogIn)
tagLogIn.appendChild(anchorTagLogIn)
tagIgnore.appendChild(tagMessenger)
tagMessenger.appendChild(anchorTagMessenger)
tagIgnore.appendChild(tagFacebookLite)
tagFacebookLite.appendChild(anchorTagFacebookLite)
tagIgnore.appendChild(tagWatch)
tagWatch.appendChild(anchorTagWatch)
tagIgnore.appendChild(tagPeople)
tagPeople.appendChild(anchorTagPeople)
tagIgnore.appendChild(tagPages)
tagPages.appendChild(anchorTagPages)
tagIgnore.appendChild(tagPagesCategories)
tagPagesCategories.appendChild(anchorTagPagesCategories)
tagIgnore.appendChild(tagPlaces)
tagPlaces.appendChild(anchorTagPlaces)
tagIgnore.appendChild(tagGames)
tagGames.appendChild(anchorTagGames)
tagIgnore.appendChild(tagLocations)
tagLocations.appendChild(anchorTagLocations)
tagIgnore.appendChild(tagMarketplace)
tagMarketplace.appendChild(anchorTagMarketplace)
tagIgnore.appendChild(tagPay)
tagPay.appendChild(anchorTagPay)
tagIgnore.appendChild(tagGroups)
tagGroups.appendChild(anchorTagGroups)
tagIgnore.appendChild(tagJobs)
tagJobs.appendChild(anchorTagJobs)
tagIgnore.appendChild(tagOculus)
tagOculus.appendChild(anchorTagOculus)
tagIgnore.appendChild(tagPortal)
tagPortal.appendChild(anchorTagPortal)
tagIgnore.appendChild(tagInstagram)
tagInstagram.appendChild(anchorTagInstagram)
tagIgnore.appendChild(tagLocal)
tagLocal.appendChild(anchorTagLocal)
tagIgnore.appendChild(tagFundraisers)
tagFundraisers.appendChild(anchorTagFundraisers)
tagIgnore.appendChild(tagServices)
tagServices.appendChild(anchorTagServices)
tagIgnore.appendChild(tagVotingInfoCenter)
tagVotingInfoCenter.appendChild(anchorTagVotingInfoCenter)
tagIgnore.appendChild(tagAbout)
tagAbout.appendChild(anchorTagAbout)
tagIgnore.appendChild(tagCreateAd)
tagCreateAd.appendChild(anchorTagCreateAd)
tagIgnore.appendChild(tagCreatePage)
tagCreatePage.appendChild(anchorTagCreatePage)
tagIgnore.appendChild(tagDevelopers)
tagDevelopers.appendChild(anchorTagDevelopers)
tagIgnore.appendChild(tagCareers)
tagCareers.appendChild(anchorTagCareers)
tagIgnore.appendChild(tagPrivacy)
tagPrivacy.appendChild(anchorTagPrivacy)
tagIgnore.appendChild(tagCookies)
tagCookies.appendChild(anchorTagCookies)
tagIgnore.appendChild(tagAdChoice)
tagAdChoice.appendChild(anchorTagAdChoice)
tagAdChoice.appendChild(imgAdChoice)
tagIgnore.appendChild(tagTerms)
tagTerms.appendChild(anchorTagTerms)
tagIgnore.appendChild(tagHelp)
tagHelp.appendChild(anchorTagHelp)
console.log("Elements Appended Sucefully")

// Set attributes

console.log("Setting Attributes")
metaUTF8.setAttribute("charset","UTF-8")
linkShortcutImage.setAttribute("rel","shortcut icon")
linkShortcutImage.setAttribute("href","img/logo.png")
facebookLogo.setAttribute("src","img/FacebookLogo.svg")
facebookLogo.setAttribute("alt","Logo de Facebook")
inputEmail.setAttribute("type","email")
inputEmail.setAttribute("minlenght","3")
inputEmail.setAttribute("required", "")
inputPassword.setAttribute("type","password")
inputPassword.setAttribute("minlenght","3")
inputPassword.setAttribute("required", "")
inputSubmit.setAttribute("type","submit")
lostPassword.setAttribute("href","https://www.facebook.com/recover/initiate/?ars=facebook_login&amp;privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjI1MDIxMzkyLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D")
createNewAccount.setAttribute("href","https://www.facebook.com/?refsrc=deprecated#")
pageRegister.setAttribute("href","https://es-la.facebook.com/pages/create/?ref_type=registration_form")
anchorLanguageSpanish.setAttribute("href", "https://es-la.facebook.com/")
anchorLanguageSpanish.setAttribute("title", "Spanish")
anchorLanguageEnglish.setAttribute("href", "https://www.facebook.com/")
anchorLanguageEnglish.setAttribute("title", "English (US)")
anchorLanguageFrench.setAttribute("href", "https://fr-fr.facebook.com/")
anchorLanguageFrench.setAttribute("title", "French(France)")
anchorLanguagePortuguese.setAttribute("href", "https://pt-br.facebook.com/")
anchorLanguagePortuguese.setAttribute("title", "Portuguese (Brazil)")
anchorLanguageItalian.setAttribute("href", "https://it-it.facebook.com/")
anchorLanguageItalian.setAttribute("title", "Italian")
anchorLanguageGerman.setAttribute("href", "https://de-de.facebook.com/")
anchorLanguageGerman.setAttribute("title", "German")
anchorLanguageArab.setAttribute("href", "https://ar-ar.facebook.com/")
anchorLanguageArab.setAttribute("title", "Arabic")
anchorLanguageHindu.setAttribute("href", "https://hi-in.facebook.com/")
anchorLanguageHindu.setAttribute("title", "Hindi")
anchorLanguageSimplifiedChinese.setAttribute("href", "https://zh-cn.facebook.com/")
anchorLanguageSimplifiedChinese.setAttribute("title", "Simplified Chinese (China)")
anchorLanguageJapanese.setAttribute("href", "https://ja-jp.facebook.com/")
anchorLanguageJapanese.setAttribute("title", "Japanese")
anchorTagRegister.setAttribute("href", "https://www.facebook.com/r/.php")
anchorTagRegister.setAttribute("title", "Sign Up for Facebook.")
anchorTagLogIn.setAttribute("href", "www.facebook.com/login/")
anchorTagLogIn.setAttribute("title", "Log into Facebook.")
anchorTagMessenger.setAttribute("href", "https://messenger.com")
anchorTagMessenger.setAttribute("title", "Check out Messenger.")
anchorTagFacebookLite.setAttribute("href", "https://www.facebook.com/lite/")
anchorTagFacebookLite.setAttribute("title", "Facebook Lite For Android.")
anchorTagWatch.setAttribute("href", "https://www.facebook.com/watch/")
anchorTagWatch.setAttribute("title", "Browse our Watch Videos.")
anchorTagPeople.setAttribute("href", "https://www.facebook.com/directory/people/")
anchorTagPeople.setAttribute("title", "Browse our people directory.")
anchorTagPages.setAttribute("href", "https://www.facebook.com/directory/pages/")
anchorTagPages.setAttribute("title", "Browse our pages directory.")
anchorTagPagesCategories.setAttribute("href", "https://www.facebook.com/pages/category/")
anchorTagPlaces.setAttribute("href", "https://www.facebook.com/places/")
anchorTagPlaces.setAttribute("title", "Check out popular places on Facebook.")
anchorTagGames.setAttribute("href", "https://www.facebook.com/games")
anchorTagGames.setAttribute("title", "Check out Facebook Games.")
anchorTagLocations.setAttribute("href", "https://www.facebook.com/directory/places/")
anchorTagLocations.setAttribute("title", "Browse our place directory.")
anchorTagMarketplace.setAttribute("href", "https://www.facebook.com/marketplace/")
anchorTagMarketplace.setAttribute("title", "Buy and sell on Facebook Marketplace.")
anchorTagPay.setAttribute("href", "https://pay.facebook.com")
anchorTagPay.setAttribute("title", "Learn more about Facebook Pay.")
anchorTagGroups.setAttribute("href", "https://www.facebook.com/directory/groups")
anchorTagGroups.setAttribute("title", "Browse our Groups directory.")
anchorTagJobs.setAttribute("href", "https://www.facebook.com/jobs")
anchorTagJobs.setAttribute("title", "Apply for jobs and hire on Facebook.")
anchorTagOculus.setAttribute("href", "https://www.oculus.com")
anchorTagOculus.setAttribute("title", "Leanr More About Oculus.")
anchorTagPortal.setAttribute("href", "https://portal.facebook.com")
anchorTagPortal.setAttribute("title", "Learn more about Portal from Facebook.")
anchorTagInstagram.setAttribute("href", "https://www.instagram.com")
anchorTagInstagram.setAttribute("title", "Check out Instagram.")
anchorTagLocal.setAttribute("href", "https://www.facebook.com/local/lists/245019872666104/")
anchorTagLocal.setAttribute("title", "Browse our local List directory.")
anchorTagFundraisers.setAttribute("href", "https://www.facebook.com/fundraisers")
anchorTagFundraisers.setAttribute("title", "Donate to worthy causes.")
anchorTagServices.setAttribute("href", "https://www.facebook.com/biz/diretory")
anchorTagServices.setAttribute("title", "Browse our Facebook Services directory.")
anchorTagVotingInfoCenter.setAttribute("href", "https://www.facebook.com/votinginformationcenter/")
anchorTagVotingInfoCenter.setAttribute("title", "See the Voting Information Center.")
anchorTagAbout.setAttribute("href", "https://about.facebook.com")
anchorTagAbout.setAttribute("title", "Read our blog, discover the resource center and find jobs opportunities.")
anchorTagCreateAd.setAttribute("href", "https://www.facebook.com/adsmanager/manage/campaigns?act=216762066558584&filter_set&nav_entry_point=lep_174&nav_source=unknown&objective=LINK_CLICKS&external_creation_from_url=true")
anchorTagCreateAd.setAttribute("title", "Advertise on Facebook.")
anchorTagCreatePage.setAttribute("href", "https://www.facebook.com/pages/create/?ref_type=site_footer")
anchorTagCreatePage.setAttribute("title", "Create a Page")
anchorTagDevelopers.setAttribute("href", "https://developers.facebook.com/?ref=pf")
anchorTagDevelopers.setAttribute("title", "Develop on our platform.")
anchorTagCareers.setAttribute("href", "https://www.facebook.com/careers/?ref=pf")
anchorTagCareers.setAttribute("title", "Makes your next career move to uor awesome company.")
anchorTagPrivacy.setAttribute("href", "https://www.facebook.com/privacy/explanation")
anchorTagPrivacy.setAttribute("title", "Learn about your privacy and Facebook.")
anchorTagCookies.setAttribute("href", "https://www.facebook.com/policies/cookies")
anchorTagCookies.setAttribute("title", "Learn about cookies and Facebook.")
anchorTagAdChoice.setAttribute("href", "https://www.facebook.com/help/568137493302217")
anchorTagAdChoice.setAttribute("title", "Learn about AdChoice.")
anchorTagTerms.setAttribute("href", "https://www.facebook.com/policies?ref=pf")
anchorTagTerms.setAttribute("title", "Review our terms and policies.")
anchorTagHelp.setAttribute("href", "https://www.facebook.com/help?ref=pf")
anchorTagHelp.setAttribute("title", "Visit our Help Center.")
imgAdChoice.setAttribute("src","img/about.png")
console.log("Attributes Setted Sucefully")

// Setting Styles

console.log("Setting Styles")
document.body.style.margin = "0"
document.body.style.border = "0"
document.body.style.padding = "0"
document.body.style.backgroundColor = "#F0F2F5"
facebookLogo.style.width = "20%"
footer.style.position = "absolute"
footer.style.bottom = "0"
footer.style.backgroundColor = "fff"
footer.style.padding = ".5em 2em"
languageSpanish.style.display = "contents"
anchorLanguageSpanish.style.margin = "0"
anchorLanguageSpanish.style.textDecoration = "none"
anchorLanguageSpanish.style.color = "8A8D91"
anchorLanguageSpanish.addEventListener("mouseover",hover = ()=>{anchorLanguageSpanish.style.textDecoration = "underline"})
anchorLanguageSpanish.addEventListener("mouseout",hover = ()=>{anchorLanguageSpanish.style.textDecoration = "none"})
languageEnglish.style.display = "contents"
anchorLanguageEnglish.style.margin = "0 .5em"
anchorLanguageEnglish.style.textDecoration = "none"
anchorLanguageEnglish.style.color = "8A8D91"
anchorLanguageEnglish.addEventListener("mouseover",hover = ()=>{anchorLanguageEnglish.style.textDecoration = "underline"})
anchorLanguageEnglish.addEventListener("mouseout",hover = ()=>{anchorLanguageEnglish.style.textDecoration = "none"})
languagePortuguese.style.display = "contents"
anchorLanguagePortuguese.style.margin = "0 .5em"
anchorLanguagePortuguese.style.textDecoration = "none"
anchorLanguagePortuguese.style.color = "8A8D91"
anchorLanguagePortuguese.addEventListener("mouseover",hover = ()=>{anchorLanguagePortuguese.style.textDecoration = "underline"})
anchorLanguagePortuguese.addEventListener("mouseout",hover = ()=>{anchorLanguagePortuguese.style.textDecoration = "none"})
languageItalian.style.display = "contents"
anchorLanguageItalian.style.margin = "0 .5em"
anchorLanguageItalian.style.textDecoration = "none"
anchorLanguageItalian.style.color = "8A8D91"
anchorLanguageItalian.addEventListener("mouseover",hover = ()=>{anchorLanguageItalian.style.textDecoration = "underline"})
anchorLanguageItalian.addEventListener("mouseout",hover = ()=>{anchorLanguageItalian.style.textDecoration = "none"})
languageFrench.style.display = "contents"
anchorLanguageFrench.style.margin = "0 .5em"
anchorLanguageFrench.style.textDecoration = "none"
anchorLanguageFrench.style.color = "8A8D91"
anchorLanguageFrench.addEventListener("mouseover",hover = ()=>{anchorLanguageFrench.style.textDecoration = "underline"})
anchorLanguageFrench.addEventListener("mouseout",hover = ()=>{anchorLanguageFrench.style.textDecoration = "none"})
languageGerman.style.display = "contents"
anchorLanguageGerman.style.margin = "0 .5em"
anchorLanguageGerman.style.textDecoration = "none"
anchorLanguageGerman.style.color = "8A8D91"
anchorLanguageGerman.addEventListener("mouseover",hover = ()=>{anchorLanguageGerman.style.textDecoration = "underline"})
anchorLanguageGerman.addEventListener("mouseout",hover = ()=>{anchorLanguageGerman.style.textDecoration = "none"})
languageArab.style.display = "contents"
anchorLanguageArab.style.margin = "0 .5em"
anchorLanguageArab.style.textDecoration = "none"
anchorLanguageArab.style.color = "8A8D91"
anchorLanguageArab.addEventListener("mouseover",hover = ()=>{anchorLanguageArab.style.textDecoration = "underline"})
anchorLanguageArab.addEventListener("mouseout",hover = ()=>{anchorLanguageArab.style.textDecoration = "none"})
languageHindu.style.display = "contents"
anchorLanguageHindu.style.margin = "0 .5em"
anchorLanguageHindu.style.textDecoration = "none"
anchorLanguageHindu.style.color = "8A8D91"
anchorLanguageHindu.addEventListener("mouseover",hover = ()=>{anchorLanguageHindu.style.textDecoration = "underline"})
anchorLanguageHindu.addEventListener("mouseout",hover = ()=>{anchorLanguageHindu.style.textDecoration = "none"})
languageSimplifiedChinese.style.display = "contents"
anchorLanguageSimplifiedChinese.style.margin = "0 .5em"
anchorLanguageSimplifiedChinese.style.textDecoration = "none"
anchorLanguageSimplifiedChinese.style.color = "8A8D91"
anchorLanguageSimplifiedChinese.addEventListener("mouseover",hover = ()=>{anchorLanguageSimplifiedChinese.style.textDecoration = "underline"})
anchorLanguageSimplifiedChinese.addEventListener("mouseout",hover = ()=>{anchorLanguageSimplifiedChinese.style.textDecoration = "none"})
languageJapanese.style.display = "contents"
anchorLanguageJapanese.style.margin = "0 .5em"
anchorLanguageJapanese.style.textDecoration = "none"
anchorLanguageJapanese.style.color = "8A8D91"
anchorLanguageJapanese.addEventListener("mouseover",hover = ()=>{anchorLanguageJapanese.style.textDecoration = "underline"})
anchorLanguageJapanese.addEventListener("mouseout",hover = ()=>{anchorLanguageJapanese.style.textDecoration = "none"})
divSeparator.style.backgroundColor = "DDDFE2"
divSeparator.style.width = "95%"
divSeparator.style.height = "1px"
divSeparator.style.margin = "0 auto"
tagRegister.style.display = "contents"
anchorTagRegister.style.margin = "0"
anchorTagRegister.style.textDecoration = "none"
anchorTagRegister.style.color = "8A8D91"
anchorTagRegister.addEventListener("mouseover",hover = ()=>{anchorTagRegister.style.textDecoration = "underline"})
anchorTagRegister.addEventListener("mouseout",hover = ()=>{anchorTagRegister.style.textDecoration = "none"})
tagLogIn.style.display = "contents"
anchorTagLogIn.style.margin = "0 .5em"
anchorTagLogIn.style.textDecoration = "none"
anchorTagLogIn.style.color = "8A8D91"
anchorTagLogIn.addEventListener("mouseover",hover = ()=>{anchorTagLogIn.style.textDecoration = "underline"})
anchorTagLogIn.addEventListener("mouseout",hover = ()=>{anchorTagLogIn.style.textDecoration = "none"})
tagMessenger.style.display = "contents"
anchorTagMessenger.style.margin = "0 .5em"
anchorTagMessenger.style.textDecoration = "none"
anchorTagMessenger.style.color = "8A8D91"
anchorTagMessenger.addEventListener("mouseover",hover = ()=>{anchorTagMessenger.style.textDecoration = "underline"})
anchorTagMessenger.addEventListener("mouseout",hover = ()=>{anchorTagMessenger.style.textDecoration = "none"})
tagFacebookLite.style.display = "contents"
anchorTagFacebookLite.style.margin = "0 .5em"
anchorTagFacebookLite.style.textDecoration = "none"
anchorTagFacebookLite.style.color = "8A8D91"
anchorTagFacebookLite.addEventListener("mouseover",hover = ()=>{anchorTagFacebookLite.style.textDecoration = "underline"})
anchorTagFacebookLite.addEventListener("mouseout",hover = ()=>{anchorTagFacebookLite.style.textDecoration = "none"})
tagWatch.style.display = "contents"
anchorTagWatch.style.margin = "0 .5em"
anchorTagWatch.style.textDecoration = "none"
anchorTagWatch.style.color = "8A8D91"
anchorTagWatch.addEventListener("mouseover",hover = ()=>{anchorTagWatch.style.textDecoration = "underline"})
anchorTagWatch.addEventListener("mouseout",hover = ()=>{anchorTagWatch.style.textDecoration = "none"})
tagPeople.style.display = "contents"
anchorTagPeople.style.margin = "0 .5em"
anchorTagPeople.style.textDecoration = "none"
anchorTagPeople.style.color = "8A8D91"
anchorTagPeople.addEventListener("mouseover",hover = ()=>{anchorTagPeople.style.textDecoration = "underline"})
anchorTagPeople.addEventListener("mouseout",hover = ()=>{anchorTagPeople.style.textDecoration = "none"})
tagPages.style.display = "contents"
anchorTagPages.style.margin = "0 .5em"
anchorTagPages.style.textDecoration = "none"
anchorTagPages.style.color = "8A8D91"
anchorTagPages.addEventListener("mouseover",hover = ()=>{anchorTagPages.style.textDecoration = "underline"})
anchorTagPages.addEventListener("mouseout",hover = ()=>{anchorTagPages.style.textDecoration = "none"})
tagPagesCategories.style.display = "contents"
anchorTagPagesCategories.style.margin = "0 .5em"
anchorTagPagesCategories.style.textDecoration = "none"
anchorTagPagesCategories.style.color = "8A8D91"
anchorTagPagesCategories.addEventListener("mouseover",hover = ()=>{anchorTagPagesCategories.style.textDecoration = "underline"})
anchorTagPagesCategories.addEventListener("mouseout",hover = ()=>{anchorTagPagesCategories.style.textDecoration = "none"})
tagPlaces.style.display = "contents"
anchorTagPlaces.style.margin = "0 .5em"
anchorTagPlaces.style.textDecoration = "none"
anchorTagPlaces.style.color = "8A8D91"
anchorTagPlaces.addEventListener("mouseover",hover = ()=>{anchorTagPlaces.style.textDecoration = "underline"})
anchorTagPlaces.addEventListener("mouseout",hover = ()=>{anchorTagPlaces.style.textDecoration = "none"})
tagGames.style.display = "contents"
anchorTagGames.style.margin = "0 .5em"
anchorTagGames.style.textDecoration = "none"
anchorTagGames.style.color = "8A8D91"
anchorTagGames.addEventListener("mouseover",hover = ()=>{anchorTagGames.style.textDecoration = "underline"})
anchorTagGames.addEventListener("mouseout",hover = ()=>{anchorTagGames.style.textDecoration = "none"})
tagLocations.style.display = "contents"
anchorTagLocations.style.margin = "0 .5em"
anchorTagLocations.style.textDecoration = "none"
anchorTagLocations.style.color = "8A8D91"
anchorTagLocations.addEventListener("mouseover",hover = ()=>{anchorTagLocations.style.textDecoration = "underline"})
anchorTagLocations.addEventListener("mouseout",hover = ()=>{anchorTagLocations.style.textDecoration = "none"})
tagMarketplace.style.display = "contents"
anchorTagMarketplace.style.margin = "0 .5em"
anchorTagMarketplace.style.textDecoration = "none"
anchorTagMarketplace.style.color = "8A8D91"
anchorTagMarketplace.addEventListener("mouseover",hover = ()=>{anchorTagMarketplace.style.textDecoration = "underline"})
anchorTagMarketplace.addEventListener("mouseout",hover = ()=>{anchorTagMarketplace.style.textDecoration = "none"})
tagPay.style.display = "contents"
anchorTagPay.style.margin = "0 .5em"
anchorTagPay.style.textDecoration = "none"
anchorTagPay.style.color = "8A8D91"
anchorTagPay.addEventListener("mouseover",hover = ()=>{anchorTagPay.style.textDecoration = "underline"})
anchorTagPay.addEventListener("mouseout",hover = ()=>{anchorTagPay.style.textDecoration = "none"})
tagGroups.style.display = "contents"
anchorTagGroups.style.margin = "0 .5em"
anchorTagGroups.style.textDecoration = "none"
anchorTagGroups.style.color = "8A8D91"
anchorTagGroups.addEventListener("mouseover",hover = ()=>{anchorTagGroups.style.textDecoration = "underline"})
anchorTagGroups.addEventListener("mouseout",hover = ()=>{anchorTagGroups.style.textDecoration = "none"})
tagJobs.style.display = "contents"
anchorTagJobs.style.margin = "0 .5em"
anchorTagJobs.style.textDecoration = "none"
anchorTagJobs.style.color = "8A8D91"
anchorTagJobs.addEventListener("mouseover",hover = ()=>{anchorTagJobs.style.textDecoration = "underline"})
anchorTagJobs.addEventListener("mouseout",hover = ()=>{anchorTagJobs.style.textDecoration = "none"})
tagOculus.style.display = "contents"
anchorTagOculus.style.margin = "0 .5em"
anchorTagOculus.style.textDecoration = "none"
anchorTagOculus.style.color = "8A8D91"
anchorTagOculus.addEventListener("mouseover",hover = ()=>{anchorTagOculus.style.textDecoration = "underline"})
anchorTagOculus.addEventListener("mouseout",hover = ()=>{anchorTagOculus.style.textDecoration = "none"})
tagPortal.style.display = "contents"
anchorTagPortal.style.margin = "0 .5em"
anchorTagPortal.style.textDecoration = "none"
anchorTagPortal.style.color = "8A8D91"
anchorTagPortal.addEventListener("mouseover",hover = ()=>{anchorTagPortal.style.textDecoration = "underline"})
anchorTagPortal.addEventListener("mouseout",hover = ()=>{anchorTagPortal.style.textDecoration = "none"})
tagInstagram.style.display = "contents"
anchorTagInstagram.style.margin = "0 .5em"
anchorTagInstagram.style.textDecoration = "none"
anchorTagInstagram.style.color = "8A8D91"
anchorTagInstagram.addEventListener("mouseover",hover = ()=>{anchorTagInstagram.style.textDecoration = "underline"})
anchorTagInstagram.addEventListener("mouseout",hover = ()=>{anchorTagInstagram.style.textDecoration = "none"})
tagLocal.style.display = "contents"
anchorTagLocal.style.margin = "0 .5em"
anchorTagLocal.style.textDecoration = "none"
anchorTagLocal.style.color = "8A8D91"
anchorTagLocal.addEventListener("mouseover",hover = ()=>{anchorTagLocal.style.textDecoration = "underline"})
anchorTagLocal.addEventListener("mouseout",hover = ()=>{anchorTagLocal.style.textDecoration = "none"})
tagFundraisers.style.display = "contents"
anchorTagFundraisers.style.margin = "0 .5em"
anchorTagFundraisers.style.textDecoration = "none"
anchorTagFundraisers.style.color = "8A8D91"
anchorTagFundraisers.addEventListener("mouseover",hover = ()=>{anchorTagFundraisers.style.textDecoration = "underline"})
anchorTagFundraisers.addEventListener("mouseout",hover = ()=>{anchorTagFundraisers.style.textDecoration = "none"})
tagServices.style.display = "contents"
anchorTagServices.style.margin = "0 .5em"
anchorTagServices.style.textDecoration = "none"
anchorTagServices.style.color = "8A8D91"
anchorTagServices.addEventListener("mouseover",hover = ()=>{anchorTagServices.style.textDecoration = "underline"})
anchorTagServices.addEventListener("mouseout",hover = ()=>{anchorTagServices.style.textDecoration = "none"})
tagVotingInfoCenter.style.display = "contents"
anchorTagVotingInfoCenter.style.margin = "0 .5em"
anchorTagVotingInfoCenter.style.textDecoration = "none"
anchorTagVotingInfoCenter.style.color = "8A8D91"
anchorTagVotingInfoCenter.addEventListener("mouseover",hover = ()=>{anchorTagVotingInfoCenter.style.textDecoration = "underline"})
anchorTagVotingInfoCenter.addEventListener("mouseout",hover = ()=>{anchorTagVotingInfoCenter.style.textDecoration = "none"})
tagAbout.style.display = "contents"
anchorTagAbout.style.margin = "0 .5em"
anchorTagAbout.style.textDecoration = "none"
anchorTagAbout.style.color = "8A8D91"
anchorTagAbout.addEventListener("mouseover",hover = ()=>{anchorTagAbout.style.textDecoration = "underline"})
anchorTagAbout.addEventListener("mouseout",hover = ()=>{anchorTagAbout.style.textDecoration = "none"})
tagCreateAd.style.display = "contents"
anchorTagCreateAd.style.margin = "0 .5em"
anchorTagCreateAd.style.textDecoration = "none"
anchorTagCreateAd.style.color = "8A8D91"
anchorTagCreateAd.addEventListener("mouseover",hover = ()=>{anchorTagCreateAd.style.textDecoration = "underline"})
anchorTagCreateAd.addEventListener("mouseout",hover = ()=>{anchorTagCreateAd.style.textDecoration = "none"})
tagCreatePage.style.display = "contents"
anchorTagCreatePage.style.margin = "0 .5em"
anchorTagCreatePage.style.textDecoration = "none"
anchorTagCreatePage.style.color = "8A8D91"
anchorTagCreatePage.addEventListener("mouseover",hover = ()=>{anchorTagCreatePage.style.textDecoration = "underline"})
anchorTagCreatePage.addEventListener("mouseout",hover = ()=>{anchorTagCreatePage.style.textDecoration = "none"})
tagDevelopers.style.display = "contents"
anchorTagDevelopers.style.margin = "0 .5em"
anchorTagDevelopers.style.textDecoration = "none"
anchorTagDevelopers.style.color = "8A8D91"
anchorTagDevelopers.addEventListener("mouseover",hover = ()=>{anchorTagDevelopers.style.textDecoration = "underline"})
anchorTagDevelopers.addEventListener("mouseout",hover = ()=>{anchorTagDevelopers.style.textDecoration = "none"})
tagCareers.style.display = "contents"
anchorTagCareers.style.margin = "0 .5em"
anchorTagCareers.style.textDecoration = "none"
anchorTagCareers.style.color = "8A8D91"
anchorTagCareers.addEventListener("mouseover",hover = ()=>{anchorTagCareers.style.textDecoration = "underline"})
anchorTagCareers.addEventListener("mouseout",hover = ()=>{anchorTagCareers.style.textDecoration = "none"})
tagPrivacy.style.display = "contents"
anchorTagPrivacy.style.margin = "0 .5em"
anchorTagPrivacy.style.textDecoration = "none"
anchorTagPrivacy.style.color = "8A8D91"
anchorTagPrivacy.addEventListener("mouseover",hover = ()=>{anchorTagPrivacy.style.textDecoration = "underline"})
anchorTagPrivacy.addEventListener("mouseout",hover = ()=>{anchorTagPrivacy.style.textDecoration = "none"})
tagCookies.style.display = "contents"
anchorTagCookies.style.margin = "0 .5em"
anchorTagCookies.style.textDecoration = "none"
anchorTagCookies.style.color = "8A8D91"
anchorTagCookies.addEventListener("mouseover",hover = ()=>{anchorTagCookies.style.textDecoration = "underline"})
anchorTagCookies.addEventListener("mouseout",hover = ()=>{anchorTagCookies.style.textDecoration = "none"})
tagAdChoice.style.display = "contents"
anchorTagAdChoice.style.margin = "0 .5em"
anchorTagAdChoice.style.textDecoration = "none"
anchorTagAdChoice.style.color = "8A8D91"
anchorTagAdChoice.addEventListener("mouseover",hover = ()=>{anchorTagAdChoice.style.textDecoration = "underline"})
anchorTagAdChoice.addEventListener("mouseout",hover = ()=>{anchorTagAdChoice.style.textDecoration = "none"})
tagTerms.style.display = "contents"
anchorTagTerms.style.margin = "0 .5em"
anchorTagTerms.style.textDecoration = "none"
anchorTagTerms.style.color = "8A8D91"
anchorTagTerms.addEventListener("mouseover",hover = ()=>{anchorTagTerms.style.textDecoration = "underline"})
anchorTagTerms.addEventListener("mouseout",hover = ()=>{anchorTagTerms.style.textDecoration = "none"})
tagHelp.style.display = "contents"
anchorTagHelp.style.margin = "0 .5em"
anchorTagHelp.style.textDecoration = "none"
anchorTagHelp.style.color = "8A8D91"
anchorTagHelp.addEventListener("mouseover",hover = ()=>{anchorTagHelp.style.textDecoration = "underline"})
anchorTagHelp.addEventListener("mouseout",hover = ()=>{anchorTagHelp.style.textDecoration = "none"})
console.log("Styles setted sucefully")
