form_data='av=100004274496708&__user=100004274496708&__a=1&__dyn=7AzHJ16U9ob8ng9odoyGxu4VuC0BVU98nwgU29zEdE98K2aew9G2Saxa1Az8bo6u3y4o2Gwfi0LVEtwMw65xOfwwwto88427Uy11xmfz83WwgEcHzoaEaoG0Boy1PwBgK7qxS18wc61axe3e9xy48aU8od8-UqwsUkxe2GewGwkUtxGm2SUnxq5olwUwHxm4-5pUfEe8722u8wywLwcCm3-&__csr=gecdhfkH4Nc9Myz8DfbOO-B9tPZ9T5OPiEAhnRsLJZO49GGQnF3pnO9-GFfmGpRriiYDAqqQuJWgCLiiCgzjl5Cmu_FpLWx1BQ9iVrBVFdBmBozKGjORi-Q4kmt5A8iqEgUCaRyFpmhKUjDGeDgOp16GKiUJ2USbCGdyEa8CAmmt7Gu8z8hVeh3KWxii8Ay9ry4by8akp4VAE-8h8CFVe4Qu694EW8CCnAy8J5xyq9gxoLvGahp6UGm5pbix64EK6-m68xyppemVujDy9pumFEjU-EmQnxi3eF-58jyrz9pbg8EaUy8wCmdwAG7pUgxq6UCUjU8u1vUnwwDzUoK0a5w4nw5eBUG1mwhofU1W5w1He04O8ow1jy08cAze05Vj1W6G6Ay838U3xh88Ene3y1wwvR8udmb960ce1Ww8Po3Iw4qwb50tE3HDge8fpeqi4VUhDDxe6E37w5RwcwMaEck1vg840GU620d9wfq5Ue4u1Wwku5UcU1Vo5-q0gu0d7wgo1Dk&__req=2o&__beoa=0&__pc=EXP2%3Acomet_pkg&__bhv=2&dpr=1.5&__ccg=EXCELLENT&__rev=1003529260&__s=ao8wy6%3Asw5fvx%3Atgptjm&__hsi=6945045437598154093-0&__comet_req=1&fb_dtsg=AQE_is8_RXQJ%3AAQEENn-vgi0H&jazoest=22027&__spin_r=1003529260&__spin_b=trunk&__spin_t=1617019399&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometUFIReactionsDialogTabContentRefetchQuery&variables=%7B%22count%22%3A10%2C%22cursor%22%3A%22AQHRzRBV6ATEDk9JLQmCpxea_57UvtgOe7s4HRPt1PPexMid0dt2f23AP_hNU1adUI0t5sWlTSBvuoNYsQYri_XKvA%22%2C%22feedbackTargetID%22%3A%22ZmVlZGJhY2s6ODk1NzQxNDMxMjE0MTgz%22%2C%22reactionType%22%3A%22NONE%22%2C%22scale%22%3A1.5%2C%22id%22%3A%22ZmVlZGJhY2s6ODk1NzQxNDMxMjE0MTgz%22%7D&server_timestamps=true&doc_id=3809394989181095';

users=[];cursor='';interval=1000;loop=0;function scrap(){try{if(loop>0){var splits=form_data.split('22cursor%22%3A%22',2);var splits2=splits[1].split('%22%2C%22feedbackTargetID',2);form_data=splits[0]+'22cursor%22%3A%22'+cursor+'%22%2C%22feedbackTargetID'+splits2[1]}loop+=1;console.log('Working..');var xhr=new XMLHttpRequest();xhr.open('POST','https://www.facebook.com/api/graphql/',false);xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');xhr.send(JSON.stringify(form_data));if(xhr.status===200){data=xhr.responseText;data_parsed=JSON.parse(data);if(data_parsed['data']['node']['reactors']['page_info']['end_cursor']==null||loop>1000){result=users.join("\n");var element=document.createElement('a');element.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(result));element.setAttribute('download','usersFromFacebook.txt');element.style.display='none';document.body.appendChild(element);element.click();document.body.removeChild(element);clearInterval(interval_id);console.log('ГОТОВО!')}else{var edges=data_parsed['data']['node']['reactors']['edges'];for(let i=0;i<edges.length;i++){users.push(edges[i]['node']['profile_url'])}cursor=data_parsed['data']['node']['reactors']['page_info']['end_cursor']}}else{console.log('Error! Status = '+xhr.status)}}catch{console.log(e)}}var interval_id=setInterval(scrap,interval);