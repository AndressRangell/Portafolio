/*NAV BAR*/
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.a-lang');
const navHomeEl = document.querySelector('.navHome');
const navAboutEl = document.querySelector('.navAbout');
const navSkillsEl = document.querySelector('.navSkills');
const navPortafolioEl = document.querySelector('.navPortafolio');
const navContactEl = document.querySelector('.navContact');
/*HOME*/
const homeGreetingEl = document.querySelector('.homeGreeting');
const homeNameEl = document.querySelector('.homeName');
const homeEducationEl = document.querySelector('.homeEducation');
const homeButtonDownloadEl = document.querySelector('.homeButtonDownload');
const homeButtonAboutEl = document.querySelector('.homeButtonAbout');
/*ABOUT*/
const titleAboutEl = document.querySelector('.titleAbout');
const aboutTxt1El = document.querySelector('.aboutTxt1');
const aboutTxt2El = document.querySelector('.aboutTxt2');
const aboutTxt3El = document.querySelector('.aboutTxt3');
const aboutTxt4El = document.querySelector('.aboutTxt4');
const aboutTxt5El = document.querySelector('.aboutTxt5');
const aboutTxt6El = document.querySelector('.aboutTxt6');
const aboutTxt7El = document.querySelector('.aboutTxt7');
const aboutMsg1El = document.querySelector('.aboutMsg1');
const aboutMsg2El = document.querySelector('.aboutMsg2');
/*SKILLS*/
const titleSkillsEl = document.querySelector('.titleSkills');
const subtitleSkillsEl = document.querySelector('.subtitleSkills');
const skillsTxt1El = document.querySelector('.skillsTxt1');
const skillsTxt2El = document.querySelector('.skillsTxt2');
const skillsTxt3El = document.querySelector('.skillsTxt3');
const skillsTxt4El = document.querySelector('.skillsTxt4');
const skillsTxt5El = document.querySelector('.skillsTxt5');
const skillsTxt6El = document.querySelector('.skillsTxt6');
const skillsTxt7El = document.querySelector('.skillsTxt7');
const skillsTxt8El = document.querySelector('.skillsTxt8');
const skillsTxt9El = document.querySelector('.skillsTxt9');
const skillsTxt10El = document.querySelector('.skillsTxt10');
const skillsTxt11El = document.querySelector('.skillsTxt11');
const skillsTxt12El = document.querySelector('.skillsTxt12');
const skillsTxt13El = document.querySelector('.skillsTxt13');
const skillButton1El = document.querySelector('.skillButton1');
const skillButton2El = document.querySelector('.skillButton2');
const skillsTitleCard1El = document.querySelector('.skillsTitleCard1');
const skillsTitleCard2El = document.querySelector('.skillsTitleCard2');
const soft1El = document.querySelector('.soft1');
const soft2El = document.querySelector('.soft2');
const soft3El = document.querySelector('.soft3');
const soft4El = document.querySelector('.soft4');
const soft5El = document.querySelector('.soft5');
const soft6El = document.querySelector('.soft6');
const skillsMsg1El = document.querySelector('.skillsMsg1');
const skillsMsg2El = document.querySelector('.skillsMsg2');
const skillsMsg3El = document.querySelector('.skillsMsg3');
/*PORTFOLIO*/
const titlePortafolioEl = document.querySelector('.titlePortafolio');
const subtitlePortafolioEl = document.querySelector('.subtitlePortafolio');
const workItem1El = document.querySelector('.workItem1');
const workItem2El = document.querySelector('.workItem2');
const workItem3El = document.querySelector('.workItem3');
const workItem4El = document.querySelector('.workItem4');
const descKidiMathEl = document.querySelector('.descKidiMath');
const descKingdomAppEl = document.querySelector('.descKingdomApp');
const descBatatabitEl = document.querySelector('.descBatatabit');
const descCartasEl = document.querySelector('.descCartas');
const descVacunappEl = document.querySelector('.descVacunapp');
const titleHistUsEl = document.querySelector('.titleHistUs');
const descHistUsEl = document.querySelector('.descHistUs');
const titleGoogleEl = document.querySelector('.titleGoogle');
const descGoogleEl = document.querySelector('.descGoogle');
const worksMsg1El = document.querySelector('.worksMsg1');
const worksMsg2El = document.querySelector('.worksMsg2');
const worksMsg3El = document.querySelector('.worksMsg3');
/*CONTACT*/
const titleContactEl = document.querySelector('.titleContact');
const subtitleContactEl = document.querySelector('.subtitleContact');
const contactTextEl = document.querySelector('.contactText');
const waycontactTitleEl = document.querySelector('.waycontactTitle');
const formcontactTitleEl = document.querySelector('.formcontactTitle');
const waycontactEmailEl = document.querySelector('.waycontactEmail');
const formNameEl = document.querySelector('.formName');
const formMailEl = document.querySelector('.formMail');
const formMssgEl = document.querySelector('.formMssg');
const formSubmitEl = document.querySelector('.formSubmit');
/*FOOTER*/
const footerMsgEl = document.querySelector('.footerMsg');
const footerrightsEl = document.querySelector('.footerrights');


link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.lang-active').classList.remove('lang-active');
        el.classList.add('lang-active');

        const attr = el.getAttribute('language');

        /*NAV BAR*/
        navHomeEl.textContent = data[attr].navHome;
        navAboutEl.textContent = data[attr].navAbout;
        navSkillsEl.textContent = data[attr].navSkills;
        navPortafolioEl.textContent = data[attr].navPortafolio;
        navContactEl.textContent = data[attr].navContact;
        /*HOME*/
        homeGreetingEl.textContent = data[attr].homeGreeting;
        homeNameEl.textContent = data[attr].homeName;
        homeEducationEl.textContent = data[attr].homeEducation;
        homeButtonDownloadEl.textContent = data[attr].homeButtonDownload;
        homeButtonAboutEl.textContent = data[attr].homeButtonAbout;
        /*ABOUT*/
        titleAboutEl.textContent = data[attr].titleAbout;
        aboutTxt1El.textContent = data[attr].aboutTxt1;
        aboutTxt2El.textContent = data[attr].aboutTxt2;
        aboutTxt3El.textContent = data[attr].aboutTxt3;
        aboutTxt4El.textContent = data[attr].aboutTxt4;
        aboutTxt5El.textContent = data[attr].aboutTxt5;
        aboutTxt6El.textContent = data[attr].aboutTxt6;
        aboutTxt7El.textContent = data[attr].aboutTxt7;
        aboutMsg1El.textContent = data[attr].aboutMsg1;
        aboutMsg2El.textContent = data[attr].aboutMsg2;
        /*SKILLS*/
        titleSkillsEl.textContent = data[attr].titleSkills;
        subtitleSkillsEl.textContent = data[attr].subtitleSkills;
        skillsTxt1El.textContent = data[attr].skillsTxt1;
        skillsTxt2El.textContent = data[attr].skillsTxt2;
        skillsTxt3El.textContent = data[attr].skillsTxt3;
        skillsTxt4El.textContent = data[attr].skillsTxt4;
        skillsTxt5El.textContent = data[attr].skillsTxt5;
        skillsTxt6El.textContent = data[attr].skillsTxt6;
        skillsTxt7El.textContent = data[attr].skillsTxt7;
        skillsTxt8El.textContent = data[attr].skillsTxt8;
        skillsTxt9El.textContent = data[attr].skillsTxt9;
        skillsTxt10El.textContent = data[attr].skillsTxt10;
        skillsTxt11El.textContent = data[attr].skillsTxt11;
        skillsTxt12El.textContent = data[attr].skillsTxt12;
        skillsTxt13El.textContent = data[attr].skillsTxt13;
        skillButton1El.textContent = data[attr].skillButton1;
        skillButton2El.textContent = data[attr].skillButton2;
        skillsTitleCard1El.textContent = data[attr].skillsTitleCard1;
        skillsTitleCard2El.textContent = data[attr].skillsTitleCard2;
        soft1El.textContent = data[attr].soft1;
        soft2El.textContent = data[attr].soft2;
        soft3El.textContent = data[attr].soft3;
        soft4El.textContent = data[attr].soft4;
        soft5El.textContent = data[attr].soft5;
        soft6El.textContent = data[attr].soft6;
        skillsMsg1El.textContent = data[attr].skillsMsg1;
        skillsMsg2El.textContent = data[attr].skillsMsg2;
        skillsMsg3El.textContent = data[attr].skillsMsg3;
        worksMsg1El.textContent = data[attr].worksMsg1;
        worksMsg2El.textContent = data[attr].worksMsg2;
        worksMsg3El.textContent = data[attr].worksMsg3;
        /*PORTFOLIO*/
        titlePortafolioEl.textContent = data[attr].titlePortafolio;
        subtitlePortafolioEl.textContent = data[attr].subtitlePortafolio;
        workItem1El.textContent = data[attr].workItem1;
        workItem2El.textContent = data[attr].workItem2;
        workItem3El.textContent = data[attr].workItem3;
        workItem4El.textContent = data[attr].workItem4;
        descKidiMathEl.textContent = data[attr].descKidiMath;
        descKingdomAppEl.textContent = data[attr].descKingdomApp;
        descBatatabitEl.textContent = data[attr].descBatatabit;
        descCartasEl.textContent = data[attr].descCartas;
        descVacunappEl.textContent = data[attr].descVacunapp;
        titleHistUsEl.textContent = data[attr].titleHistUs;
        descHistUsEl.textContent = data[attr].descHistUs;
        titleGoogleEl.textContent = data[attr].titleGoogle;
        descGoogleEl.textContent = data[attr].descGoogle;
        /*CONTACT*/
        titleContactEl.textContent = data[attr].titleContact;
        subtitleContactEl.textContent = data[attr].subtitleContact;
        contactTextEl.textContent = data[attr].contactText;
        waycontactTitleEl.textContent = data[attr].waycontactTitle;
        formcontactTitleEl.textContent = data[attr].formcontactTitle;
        waycontactEmailEl.textContent = data[attr].waycontactEmail;
        formNameEl.textContent = data[attr].formName;
        formMailEl.textContent = data[attr].formMail;
        formMssgEl.textContent = data[attr].formMssg;
        formSubmitEl.textContent = data[attr].formSubmit;
        /*FOOTER*/
        footerMsgEl.textContent = data[attr].footerMsg;
        footerrightsEl.textContent = data[attr].footerrights;
    });
});

var data = {
    "spanish":{
        /*NAV BAR*/
        "navHome":"Inicio",
        "navAbout":"Sobre mí",
        "navSkills":"Habilidades",
        "navContact":"Contacto"
    },
    "english":{
        /*NAV BAR*/
        "navHome":"Home",
        "navAbout":"About",
        "navSkills":"Skills",
        "navContact":"Contact"
    }
}