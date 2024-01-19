const router = require('express').Router();
const Mentor = require('../models/Mentor');

router.get("/getLinkedin", async(req, res)=>{
    try {
        const profile_id = "abhishek-upadhyay-26397a224"
        // get headline and summary from linkedin
        const profile = await fetch(`https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(vanityName:${profile_id})&queryId=voyagerIdentityDashProfiles.a1941bc56db02d2a36a03dd81313f3c7`, {
            "headers": {
                "accept": "application/vnd.linkedin.normalized+json+2.1",
                "accept-language": "en-US,en-IN;q=0.9,en;q=0.8",
                "csrf-token": "ajax:8408911862325115594",
                "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-li-lang": "en_US",
                "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;v4aiexc4T3mVU/c68blPNg==",
                "x-li-pem-metadata": "Voyager - Profile=profile-top-card-supplementary",
                "x-li-track": "{\"clientVersion\":\"1.13.9352\",\"mpVersion\":\"1.13.9352\",\"osName\":\"web\",\"timezoneOffset\":5.5,\"timezone\":\"Asia/Calcutta\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":1,\"displayWidth\":1366,\"displayHeight\":768}",
                "x-restli-protocol-version": "2.0.0",
                "cookie": "bcookie=\"v=2&f3b75ad5-99c9-4316-833e-3f8097738f90\"; bscookie=\"v=1&2023031414225177f0aada-f0d3-4347-8113-20e7ac6d8cdbAQEm92QABk-lF7zin6nCIckU97Fh7C_w\"; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; li_theme=light; li_theme_set=app; li_sugr=74dc8a81-68ee-4af6-a63d-1862b99f3df1; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.1099070296.1679477845; li_rm=AQGyn8KQOHL_BgAAAYhN17u7F4l_chcZYiySW0s2slBt-ECc92v4hYxJk3o4fstaEYiX1F2-aYktWm0gasRjMbZi54qlzSX-tXTknH6I3ucwzj6iKMozLmeZ; timezone=Asia/Calcutta; _guid=b3256d0f-0b38-460d-b2f9-3caba02ebe20; AnalyticsSyncHistory=AQL4plsDrICbXQAAAY0OP_faHmFVNr1jirFzS5UakjtsC8M6GB6FIs4eWSgEqRB0q8zA4WPmeziN5nZTcx4FdQ; lms_ads=AQEWa1ebGWOfegAAAY0OP_o9YBdlxXPedkZuonUpjdwwZKyTiLT4R_Q3jkWj-UGndUrZWo2Njizhm45OC5Tpq2LUCWQkuzv4; lms_analytics=AQEWa1ebGWOfegAAAY0OP_o9YBdlxXPedkZuonUpjdwwZKyTiLT4R_Q3jkWj-UGndUrZWo2Njizhm45OC5Tpq2LUCWQkuzv4; visit=v=1&M; g_state={\"i_l\":0}; JSESSIONID=ajax:8408911862325115594; lang=v=2&lang=en-us; fid=AQFPe8UFWhUWxwAAAY0YyBOtTX_WjhJjjCd5K4PNPiR7EGAE8Ik85ZZhy2DTlQp_HO8nYQ-v6zuM5Q; li_at=AQEDAUqep6gFzyO1AAABjRjJeLoAAAGNPNX8uk0Ae9LFCERU_hC9iGreHyKJ0_lCTlgayLa94Q7IRBBDs_JTGRJMW-VPCnE1VSev16Oq31xv8OMwdmQgULWdvVhEc3Wz8BcJE4b2gPzSbl2Mdt8yWgjt; liap=true; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19740%7CMCMID%7C29921531499630883441875789274468017541%7CMCAAMLH-1697955862%7C12%7CMCAAMB-1705517882%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1705525084s%7CNONE%7CMCCIDH%7C-621568090%7CvVersion%7C5.1.1; sdsc=22%3A1%2C1705518125978%7EJBSK%2C0W5TtxwW3pZclN3HA4w7JPRKyJpk%3D; UserMatchHistory=AQLu34_wTYzb1gAAAY0amzqNfr-4uNOpldbyNjT63OBFgZJMi5d6-Vr2Y227KXAIvb2ZTzBeHK9gqMuebR3QYktpjIQYVOAn7260B27EPdlPW2kEiepZQDUBse8_rbu5E56wXlKiquWaezN93Gc-T3n6RMrSIVmEduESjhmY5D-6U3R4PnSbFFKAmkyKVrtGdbYzccQS5zwWthSPO4wcSo7uOV6w8MWP1bY3XWaCfmnFrckl2vEyFa1tNEdB4iu1JyC1ZETJjV2Cs-GJxWxQYU9hF2t_0pWX72o5506UgD3cXTkZBJXxX9B4E6Y3iJCf1u2_aENz78ioZRrWjAutsOm6DHznuO4; lidc=\"b=VGST08:s=V:r=V:a=V:p=V:g=2789:u=1:x=1:i=1705548441:t=1705604273:v=2:sig=AQH5vOHipJ4oRks0CIdGamoDe0dkQCLF\"",
                "Referer": `https://www.linkedin.com/in/${profile_id}/`,
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
        });
        const header_data = await profile.json();
        let target_url = header_data.included[6].composeNavigationContext?.targetUrl;
        console.log(target_url);

        if(!target_url){
            target_url = header_data.included[5].composeNavigationContext?.targetUrl;
        }

        let profile_url = target_url.split("%");
        profile_url = profile_url[profile_url.length - 1];
        const footer = await fetch(`https://www.linkedin.com/voyager/api/graphql?includeWebMetadata=true&variables=(profileUrn:urn%3Ali%3Afsd_profile%${profile_url})&queryId=voyagerIdentityDashProfileCards.d29bee279fbe086e7591bd637c292742`, {
        "headers": {
            "accept": "application/vnd.linkedin.normalized+json+2.1",
            "accept-language": "en-US,en-IN;q=0.9,en;q=0.8",
            "csrf-token": "ajax:8408911862325115594",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-li-lang": "en_US",
            "x-li-page-instance": "urn:li:page:d_flagship3_profile_view_base;go57tptyTN+eV7WnSTwrhA==",
            "x-li-pem-metadata": "Voyager - Profile=profile-tab-initial-cards",
            "x-li-track": "{\"clientVersion\":\"1.13.9352\",\"mpVersion\":\"1.13.9352\",\"osName\":\"web\",\"timezoneOffset\":5.5,\"timezone\":\"Asia/Calcutta\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":1,\"displayWidth\":1366,\"displayHeight\":768}",
            "x-restli-protocol-version": "2.0.0",
            "cookie": "bcookie=\"v=2&f3b75ad5-99c9-4316-833e-3f8097738f90\"; bscookie=\"v=1&2023031414225177f0aada-f0d3-4347-8113-20e7ac6d8cdbAQEm92QABk-lF7zin6nCIckU97Fh7C_w\"; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; li_theme=light; li_theme_set=app; li_sugr=74dc8a81-68ee-4af6-a63d-1862b99f3df1; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; _gcl_au=1.1.1099070296.1679477845; li_rm=AQGyn8KQOHL_BgAAAYhN17u7F4l_chcZYiySW0s2slBt-ECc92v4hYxJk3o4fstaEYiX1F2-aYktWm0gasRjMbZi54qlzSX-tXTknH6I3ucwzj6iKMozLmeZ; timezone=Asia/Calcutta; _guid=b3256d0f-0b38-460d-b2f9-3caba02ebe20; AnalyticsSyncHistory=AQL4plsDrICbXQAAAY0OP_faHmFVNr1jirFzS5UakjtsC8M6GB6FIs4eWSgEqRB0q8zA4WPmeziN5nZTcx4FdQ; lms_ads=AQEWa1ebGWOfegAAAY0OP_o9YBdlxXPedkZuonUpjdwwZKyTiLT4R_Q3jkWj-UGndUrZWo2Njizhm45OC5Tpq2LUCWQkuzv4; lms_analytics=AQEWa1ebGWOfegAAAY0OP_o9YBdlxXPedkZuonUpjdwwZKyTiLT4R_Q3jkWj-UGndUrZWo2Njizhm45OC5Tpq2LUCWQkuzv4; visit=v=1&M; g_state={\"i_l\":0}; JSESSIONID=ajax:8408911862325115594; lang=v=2&lang=en-us; fid=AQFPe8UFWhUWxwAAAY0YyBOtTX_WjhJjjCd5K4PNPiR7EGAE8Ik85ZZhy2DTlQp_HO8nYQ-v6zuM5Q; li_at=AQEDAUqep6gFzyO1AAABjRjJeLoAAAGNPNX8uk0Ae9LFCERU_hC9iGreHyKJ0_lCTlgayLa94Q7IRBBDs_JTGRJMW-VPCnE1VSev16Oq31xv8OMwdmQgULWdvVhEc3Wz8BcJE4b2gPzSbl2Mdt8yWgjt; liap=true; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19740%7CMCMID%7C29921531499630883441875789274468017541%7CMCAAMLH-1697955862%7C12%7CMCAAMB-1705517882%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1705525084s%7CNONE%7CMCCIDH%7C-621568090%7CvVersion%7C5.1.1; sdsc=22%3A1%2C1705518125978%7EJBSK%2C0W5TtxwW3pZclN3HA4w7JPRKyJpk%3D; UserMatchHistory=AQJlKZw1D-kUYQAAAY0cPNnQYW08Od9EXBNxjkS1lg6w-PdxGMXHTSpItuv2ZefojyivWUM6g4xU2EOkHqKo7wryo12YCZAiExTgkd2tT5OWe8gEvyNMJFJa4W3FvA7Mr3fzvqpg2ewGWRGuRlM53textUxq03BXtaIUtAL-ZzCiq_-22-mHzDFxoVDy2uJEx23je9CrHtKbHcnAAH9I7INh2L9-EpxtI0sTCy71laJzIWON51fmtX2rKs6UPxoVnuZL6gs2kiILlzoByPuvoEycD9m0VfLWtuGHdHwuMVeifFShfApT9pxV2CvzI60JFN43zJhQMYkBfn95xbnLk-cdNkKAbxA; lidc=\"b=VGST08:s=V:r=V:a=V:p=V:g=2789:u=1:x=1:i=1705575769:t=1705604273:v=2:sig=AQEnhYVXcB15vxCvR7ggd1-9HrDQmmcP\"",
            "Referer": `https://www.linkedin.com/in/${profile_id}/`,
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
        });
        const buttom_data = await footer.json();

        const headline = header_data.included[4].headline

        // education 
        let education = []
        if(buttom_data.included[11].topComponents[0])
            buttom_data.included[11].topComponents[1].components.fixedListComponent.components.forEach((component)=>{
                education.push(component.components.entityComponent.titleV2.text.text)
            })
        else if(buttom_data.included[9].topComponents[0])
            buttom_data.included[9].topComponents[1].components.fixedListComponent.components.forEach((component)=>{
                education.push(component.components.entityComponent.titleV2.text.text)
            })
        else
            education = []

        let work_experience = []
        // work_experience.push(buttom_data.included[5].topComponents[1].components.fixedListComponent.components[0].components.entityComponent.subtitle.text)
        if(buttom_data.included[11].topComponents[1].components)
            buttom_data.included[5].topComponents[1].components.fixedListComponent.components.forEach((component)=>{
                work_experience.push(component.components.entityComponent.subtitle.text)
            })
        // console.log(headline, education, work_experience)

        res.json({headline, education, work_experience});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: String(error)});
    }
})

router.get("/getAllSkills", async(req, res)=>{
    try{
        const skills = await Mentor.find({}).select("skills");
        // get distinct skills
        let all_skills = [];
        skills.forEach((skill)=>{
            all_skills = all_skills.concat(skill.skills);
        })
        all_skills = [...new Set(all_skills)];
        res.json({skills: all_skills});
    }catch(err){
        console.log(err)
        res.status(500).json({error: String(error)});
    }
})

module.exports = router;