function FOOTER() {

    return `
    <div id="foo_one">
        <div id="foo_email">
            <p><i class="fa fa-envelope"></i> GET SPECIAL DISCOUNT ON YOUR INBOX
            </p>
            <form action="">
                <input type="email" id="" placeholder="Your Email">
                <button type="submit">Send</button>
            </form>
        </div>

        <div id="foo_experience">
            <div id="icon_wrapper">
                <i class="fas fa-mobile-android-alt"  id="foot--mobile"></i>
                <p id="foot--expe">EXPERIENCE THE NYKAA MOBILE APP</p>
            </div>

            <div id="svg_wrapper">
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="122" height="36" viewBox="0 0 135 40"><title>Google Play Store</title><path d="M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.2 5-5 5z"></path><path d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125m0-.8H5C2.2 0 0 2.3 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z" fill="#a6a6a6"></path><path d="M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9s-1.6-.3-2.2-.9c-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7 1 .7 1.6.7c.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.8h2.9v.4zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zm3.3 5.3h-.8V7.7h-1.7V7H57v.7h-1.7V13zm4.6 0V7h.8v6h-.8zm4.2 0h-.8V7.7h-1.7V7h4.1v.7H64l.1 5.3zm9.5-.8c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2 1.3-.9 2.2-.9c.9 0 1.6.3 2.2.9s.9 1.3.9 2.2-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7s-1.2.2-1.6.7c-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zm5.8 1.3V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z" fill="#fff" stroke="#fff" stroke-width=".2" stroke-miterlimit="10"></path><path d="M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.4 1 2.4 2.6c0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6s3.1 6.6 6.7 6.6c2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.3 1.1 2.3 2.6-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z" fill="#fff"></path><linearGradient id="gpA" gradientUnits="userSpaceOnUse" x1="21.795" y1="-152.295" x2="5.012" y2="-135.513" gradientTransform="translate(0 161)"><stop offset="0" stop-color="#00a0ff"></stop><stop offset=".007" stop-color="#00a1ff"></stop><stop offset=".26" stop-color="#00beff"></stop><stop offset=".512" stop-color="#00d2ff"></stop><stop offset=".76" stop-color="#00dfff"></stop><stop offset="1" stop-color="#00e3ff"></stop></linearGradient><path d="M10.4 7.5c-.3.3-.4.8-.4 1.4V31c0 .6.2 1.1.5 1.4l.1.1L23 20.1v-.2L10.4 7.5z" fill="url(#gpA)"></path><linearGradient id="gpB" gradientUnits="userSpaceOnUse" x1="33.834" y1="-140.95" x2="9.637" y2="-140.95" gradientTransform="translate(0 161)"><stop offset="0" stop-color="#ffe000"></stop><stop offset=".409" stop-color="#ffbd00"></stop><stop offset=".775" stop-color="orange"></stop><stop offset="1" stop-color="#ff9c00"></stop></linearGradient><path d="M27 24.3l-4.1-4.1v-.3l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z" fill="url(#gpB)"></path><linearGradient id="gpC" gradientUnits="userSpaceOnUse" x1="24.816" y1="-138.715" x2="2.058" y2="-115.957" gradientTransform="translate(0 161)"><stop offset="0" stop-color="#ff3a44"></stop><stop offset="1" stop-color="#c31162"></stop></linearGradient><path d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4" fill="url(#gpC)"></path><linearGradient id="gpD" gradientUnits="userSpaceOnUse" x1="7.261" y1="-160.788" x2="17.424" y2="-150.625" gradientTransform="translate(0 161)"><stop offset="0" stop-color="#32a071"></stop><stop offset=".069" stop-color="#2da771"></stop><stop offset=".476" stop-color="#15cf74"></stop><stop offset=".801" stop-color="#06e775"></stop><stop offset="1" stop-color="#00f076"></stop></linearGradient><path d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z" fill="url(#gpD)"></path><path d="M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z" opacity=".2"></path><path d="M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zm21.6-11l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z" opacity=".12"></path><path d="M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4l-19.5-11c-1.4-.9-2.5-.3-2.5 1.3V9c0-1.5 1.1-2.2 2.5-1.4z" opacity=".25" fill="#fff"></path></svg></a>

               

                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" id="livetype" width="122" height="36" viewBox="0 0 119.66407 40">
                    <title>Download_on_the_App_Store_Badge_US-UK_RGB_blk_4SVG_092917</title>
                    <g>
                      <g>
                        <g>
                          <path d="M110.13477,0H9.53468c-.3667,0-.729,0-1.09473.002-.30615.002-.60986.00781-.91895.0127A13.21476,13.21476,0,0,0,5.5171.19141a6.66509,6.66509,0,0,0-1.90088.627A6.43779,6.43779,0,0,0,1.99757,1.99707,6.25844,6.25844,0,0,0,.81935,3.61816a6.60119,6.60119,0,0,0-.625,1.90332,12.993,12.993,0,0,0-.1792,2.002C.00587,7.83008.00489,8.1377,0,8.44434V31.5586c.00489.3105.00587.6113.01515.9219a12.99232,12.99232,0,0,0,.1792,2.0019,6.58756,6.58756,0,0,0,.625,1.9043A6.20778,6.20778,0,0,0,1.99757,38.001a6.27445,6.27445,0,0,0,1.61865,1.1787,6.70082,6.70082,0,0,0,1.90088.6308,13.45514,13.45514,0,0,0,2.0039.1768c.30909.0068.6128.0107.91895.0107C8.80567,40,9.168,40,9.53468,40H110.13477c.3594,0,.7246,0,1.084-.002.3047,0,.6172-.0039.9219-.0107a13.279,13.279,0,0,0,2-.1768,6.80432,6.80432,0,0,0,1.9082-.6308,6.27742,6.27742,0,0,0,1.6172-1.1787,6.39482,6.39482,0,0,0,1.1816-1.6143,6.60413,6.60413,0,0,0,.6191-1.9043,13.50643,13.50643,0,0,0,.1856-2.0019c.0039-.3106.0039-.6114.0039-.9219.0078-.3633.0078-.7246.0078-1.0938V9.53613c0-.36621,0-.72949-.0078-1.09179,0-.30664,0-.61426-.0039-.9209a13.5071,13.5071,0,0,0-.1856-2.002,6.6177,6.6177,0,0,0-.6191-1.90332,6.46619,6.46619,0,0,0-2.7988-2.7998,6.76754,6.76754,0,0,0-1.9082-.627,13.04394,13.04394,0,0,0-2-.17676c-.3047-.00488-.6172-.01074-.9219-.01269-.3594-.002-.7246-.002-1.084-.002Z" style="fill: #a6a6a6"/>
                          <path d="M8.44483,39.125c-.30468,0-.602-.0039-.90429-.0107a12.68714,12.68714,0,0,1-1.86914-.1631,5.88381,5.88381,0,0,1-1.65674-.5479,5.40573,5.40573,0,0,1-1.397-1.0166,5.32082,5.32082,0,0,1-1.02051-1.3965,5.72186,5.72186,0,0,1-.543-1.6572,12.41351,12.41351,0,0,1-.1665-1.875c-.00634-.2109-.01464-.9131-.01464-.9131V8.44434S.88185,7.75293.8877,7.5498a12.37039,12.37039,0,0,1,.16553-1.87207,5.7555,5.7555,0,0,1,.54346-1.6621A5.37349,5.37349,0,0,1,2.61183,2.61768,5.56543,5.56543,0,0,1,4.01417,1.59521a5.82309,5.82309,0,0,1,1.65332-.54394A12.58589,12.58589,0,0,1,7.543.88721L8.44532.875H111.21387l.9131.0127a12.38493,12.38493,0,0,1,1.8584.16259,5.93833,5.93833,0,0,1,1.6709.54785,5.59374,5.59374,0,0,1,2.415,2.41993,5.76267,5.76267,0,0,1,.5352,1.64892,12.995,12.995,0,0,1,.1738,1.88721c.0029.2832.0029.5874.0029.89014.0079.375.0079.73193.0079,1.09179V30.4648c0,.3633,0,.7178-.0079,1.0752,0,.3252,0,.6231-.0039.9297a12.73126,12.73126,0,0,1-.1709,1.8535,5.739,5.739,0,0,1-.54,1.67,5.48029,5.48029,0,0,1-1.0156,1.3857,5.4129,5.4129,0,0,1-1.3994,1.0225,5.86168,5.86168,0,0,1-1.668.5498,12.54218,12.54218,0,0,1-1.8692.1631c-.2929.0068-.5996.0107-.8974.0107l-1.084.002Z"/>
                        </g>
                        <g id="_Group_" data-name="&lt;Group&gt;">
                          <g id="_Group_2" data-name="&lt;Group&gt;">
                            <g id="_Group_3" data-name="&lt;Group&gt;">
                              <path id="_Path_" data-name="&lt;Path&gt;" d="M24.76888,20.30068a4.94881,4.94881,0,0,1,2.35656-4.15206,5.06566,5.06566,0,0,0-3.99116-2.15768c-1.67924-.17626-3.30719,1.00483-4.1629,1.00483-.87227,0-2.18977-.98733-3.6085-.95814a5.31529,5.31529,0,0,0-4.47292,2.72787c-1.934,3.34842-.49141,8.26947,1.3612,10.97608.9269,1.32535,2.01018,2.8058,3.42763,2.7533,1.38706-.05753,1.9051-.88448,3.5794-.88448,1.65876,0,2.14479.88448,3.591.8511,1.48838-.02416,2.42613-1.33124,3.32051-2.66914a10.962,10.962,0,0,0,1.51842-3.09251A4.78205,4.78205,0,0,1,24.76888,20.30068Z" style="fill: #fff"/>
                              <path id="_Path_2" data-name="&lt;Path&gt;" d="M22.03725,12.21089a4.87248,4.87248,0,0,0,1.11452-3.49062,4.95746,4.95746,0,0,0-3.20758,1.65961,4.63634,4.63634,0,0,0-1.14371,3.36139A4.09905,4.09905,0,0,0,22.03725,12.21089Z" style="fill: #fff"/>
                            </g>
                          </g>
                          <g>
                            <path d="M42.30227,27.13965h-4.7334l-1.13672,3.35645H34.42727l4.4834-12.418h2.083l4.4834,12.418H43.438ZM38.0591,25.59082h3.752l-1.84961-5.44727h-.05176Z" style="fill: #fff"/>
                            <path d="M55.15969,25.96973c0,2.81348-1.50586,4.62109-3.77832,4.62109a3.0693,3.0693,0,0,1-2.84863-1.584h-.043v4.48438h-1.8584V21.44238H48.4302v1.50586h.03418a3.21162,3.21162,0,0,1,2.88281-1.60059C53.645,21.34766,55.15969,23.16406,55.15969,25.96973Zm-1.91016,0c0-1.833-.94727-3.03809-2.39258-3.03809-1.41992,0-2.375,1.23047-2.375,3.03809,0,1.82422.95508,3.0459,2.375,3.0459C52.30227,29.01563,53.24953,27.81934,53.24953,25.96973Z" style="fill: #fff"/>
                            <path d="M65.12453,25.96973c0,2.81348-1.50586,4.62109-3.77832,4.62109a3.0693,3.0693,0,0,1-2.84863-1.584h-.043v4.48438h-1.8584V21.44238H58.395v1.50586h.03418A3.21162,3.21162,0,0,1,61.312,21.34766C63.60988,21.34766,65.12453,23.16406,65.12453,25.96973Zm-1.91016,0c0-1.833-.94727-3.03809-2.39258-3.03809-1.41992,0-2.375,1.23047-2.375,3.03809,0,1.82422.95508,3.0459,2.375,3.0459C62.26711,29.01563,63.21438,27.81934,63.21438,25.96973Z" style="fill: #fff"/>
                            <path d="M71.71047,27.03613c.1377,1.23145,1.334,2.04,2.96875,2.04,1.56641,0,2.69336-.80859,2.69336-1.91895,0-.96387-.67969-1.541-2.28906-1.93652l-1.60937-.3877c-2.28027-.55078-3.33887-1.61719-3.33887-3.34766,0-2.14258,1.86719-3.61426,4.51855-3.61426,2.624,0,4.42285,1.47168,4.4834,3.61426h-1.876c-.1123-1.23926-1.13672-1.9873-2.63379-1.9873s-2.52148.75684-2.52148,1.8584c0,.87793.6543,1.39453,2.25488,1.79l1.36816.33594c2.54785.60254,3.60645,1.626,3.60645,3.44238,0,2.32324-1.85059,3.77832-4.79395,3.77832-2.75391,0-4.61328-1.4209-4.7334-3.667Z" style="fill: #fff"/>
                            <path d="M83.34621,19.2998v2.14258h1.72168v1.47168H83.34621v4.99121c0,.77539.34473,1.13672,1.10156,1.13672a5.80752,5.80752,0,0,0,.61133-.043v1.46289a5.10351,5.10351,0,0,1-1.03223.08594c-1.833,0-2.54785-.68848-2.54785-2.44434V22.91406H80.16262V21.44238H81.479V19.2998Z" style="fill: #fff"/>
                            <path d="M86.065,25.96973c0-2.84863,1.67773-4.63867,4.29395-4.63867,2.625,0,4.29492,1.79,4.29492,4.63867,0,2.85645-1.66113,4.63867-4.29492,4.63867C87.72609,30.6084,86.065,28.82617,86.065,25.96973Zm6.69531,0c0-1.9541-.89551-3.10742-2.40137-3.10742s-2.40039,1.16211-2.40039,3.10742c0,1.96191.89453,3.10645,2.40039,3.10645S92.76027,27.93164,92.76027,25.96973Z" style="fill: #fff"/>
                            <path d="M96.18606,21.44238h1.77246v1.541h.043a2.1594,2.1594,0,0,1,2.17773-1.63574,2.86616,2.86616,0,0,1,.63672.06934v1.73828a2.59794,2.59794,0,0,0-.835-.1123,1.87264,1.87264,0,0,0-1.93652,2.083v5.37012h-1.8584Z" style="fill: #fff"/>
                            <path d="M109.3843,27.83691c-.25,1.64355-1.85059,2.77148-3.89844,2.77148-2.63379,0-4.26855-1.76465-4.26855-4.5957,0-2.83984,1.64355-4.68164,4.19043-4.68164,2.50488,0,4.08008,1.7207,4.08008,4.46582v.63672h-6.39453v.1123a2.358,2.358,0,0,0,2.43555,2.56445,2.04834,2.04834,0,0,0,2.09082-1.27344Zm-6.28223-2.70215h4.52637a2.1773,2.1773,0,0,0-2.2207-2.29785A2.292,2.292,0,0,0,103.10207,25.13477Z" style="fill: #fff"/>
                          </g>
                        </g>
                      </g>
                      <g id="_Group_4" data-name="&lt;Group&gt;">
                        <g>
                          <path d="M37.82619,8.731a2.63964,2.63964,0,0,1,2.80762,2.96484c0,1.90625-1.03027,3.002-2.80762,3.002H35.67092V8.731Zm-1.22852,5.123h1.125a1.87588,1.87588,0,0,0,1.96777-2.146,1.881,1.881,0,0,0-1.96777-2.13379h-1.125Z" style="fill: #fff"/>
                          <path d="M41.68068,12.44434a2.13323,2.13323,0,1,1,4.24707,0,2.13358,2.13358,0,1,1-4.24707,0Zm3.333,0c0-.97607-.43848-1.54687-1.208-1.54687-.77246,0-1.207.5708-1.207,1.54688,0,.98389.43457,1.55029,1.207,1.55029C44.57522,13.99463,45.01369,13.42432,45.01369,12.44434Z" style="fill: #fff"/>
                          <path d="M51.57326,14.69775h-.92187l-.93066-3.31641h-.07031l-.92676,3.31641h-.91309l-1.24121-4.50293h.90137l.80664,3.436h.06641l.92578-3.436h.85254l.92578,3.436h.07031l.80273-3.436h.88867Z" style="fill: #fff"/>
                          <path d="M53.85354,10.19482H54.709v.71533h.06641a1.348,1.348,0,0,1,1.34375-.80225,1.46456,1.46456,0,0,1,1.55859,1.6748v2.915h-.88867V12.00586c0-.72363-.31445-1.0835-.97168-1.0835a1.03294,1.03294,0,0,0-1.0752,1.14111v2.63428h-.88867Z" style="fill: #fff"/>
                          <path d="M59.09377,8.437h.88867v6.26074h-.88867Z" style="fill: #fff"/>
                          <path d="M61.21779,12.44434a2.13346,2.13346,0,1,1,4.24756,0,2.1338,2.1338,0,1,1-4.24756,0Zm3.333,0c0-.97607-.43848-1.54687-1.208-1.54687-.77246,0-1.207.5708-1.207,1.54688,0,.98389.43457,1.55029,1.207,1.55029C64.11232,13.99463,64.5508,13.42432,64.5508,12.44434Z" style="fill: #fff"/>
                          <path d="M66.4009,13.42432c0-.81055.60352-1.27783,1.6748-1.34424l1.21973-.07031v-.38867c0-.47559-.31445-.74414-.92187-.74414-.49609,0-.83984.18213-.93848.50049h-.86035c.09082-.77344.81836-1.26953,1.83984-1.26953,1.12891,0,1.76563.562,1.76563,1.51318v3.07666h-.85547v-.63281h-.07031a1.515,1.515,0,0,1-1.35254.707A1.36026,1.36026,0,0,1,66.4009,13.42432Zm2.89453-.38477v-.37646l-1.09961.07031c-.62012.0415-.90137.25244-.90137.64941,0,.40527.35156.64111.835.64111A1.0615,1.0615,0,0,0,69.29543,13.03955Z" style="fill: #fff"/>
                          <path d="M71.34816,12.44434c0-1.42285.73145-2.32422,1.86914-2.32422a1.484,1.484,0,0,1,1.38086.79h.06641V8.437h.88867v6.26074h-.85156v-.71143h-.07031a1.56284,1.56284,0,0,1-1.41406.78564C72.0718,14.772,71.34816,13.87061,71.34816,12.44434Zm.918,0c0,.95508.4502,1.52979,1.20313,1.52979.749,0,1.21191-.583,1.21191-1.52588,0-.93848-.46777-1.52979-1.21191-1.52979C72.72121,10.91846,72.26613,11.49707,72.26613,12.44434Z" style="fill: #fff"/>
                          <path d="M79.23,12.44434a2.13323,2.13323,0,1,1,4.24707,0,2.13358,2.13358,0,1,1-4.24707,0Zm3.333,0c0-.97607-.43848-1.54687-1.208-1.54687-.77246,0-1.207.5708-1.207,1.54688,0,.98389.43457,1.55029,1.207,1.55029C82.12453,13.99463,82.563,13.42432,82.563,12.44434Z" style="fill: #fff"/>
                          <path d="M84.66945,10.19482h.85547v.71533h.06641a1.348,1.348,0,0,1,1.34375-.80225,1.46456,1.46456,0,0,1,1.55859,1.6748v2.915H87.605V12.00586c0-.72363-.31445-1.0835-.97168-1.0835a1.03294,1.03294,0,0,0-1.0752,1.14111v2.63428h-.88867Z" style="fill: #fff"/>
                          <path d="M93.51516,9.07373v1.1416h.97559v.74854h-.97559V13.2793c0,.47168.19434.67822.63672.67822a2.96657,2.96657,0,0,0,.33887-.02051v.74023a2.9155,2.9155,0,0,1-.4834.04541c-.98828,0-1.38184-.34766-1.38184-1.21582v-2.543h-.71484v-.74854h.71484V9.07373Z" style="fill: #fff"/>
                          <path d="M95.70461,8.437h.88086v2.48145h.07031a1.3856,1.3856,0,0,1,1.373-.80664,1.48339,1.48339,0,0,1,1.55078,1.67871v2.90723H98.69v-2.688c0-.71924-.335-1.0835-.96289-1.0835a1.05194,1.05194,0,0,0-1.13379,1.1416v2.62988h-.88867Z" style="fill: #fff"/>
                          <path d="M104.76125,13.48193a1.828,1.828,0,0,1-1.95117,1.30273A2.04531,2.04531,0,0,1,100.73,12.46045a2.07685,2.07685,0,0,1,2.07617-2.35254c1.25293,0,2.00879.856,2.00879,2.27V12.688h-3.17969v.0498a1.1902,1.1902,0,0,0,1.19922,1.29,1.07934,1.07934,0,0,0,1.07129-.5459Zm-3.126-1.45117h2.27441a1.08647,1.08647,0,0,0-1.1084-1.1665A1.15162,1.15162,0,0,0,101.63527,12.03076Z" style="fill: #fff"/>
                        </g>
                      </g>
                    </g>
                  </svg></a>
            </div>
            
        </div>

        <div id="foo_contact">
            <div id="icon">
                <i class="fas fa-phone-alt"></i>
            </div>
            <div id="text_container">
                <p>FOR ANY HELP YOU MAY CALL US AT
                    <br>1800-267-4444</p>

                <p>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</p>    
            </div>
        </div>
    </div>

    <div id="foo_menu">
        <div class="foo_menu_container">
        
            <ul>
                <li><img src="" alt="nykaa logo"></li>
                <li><a href="#">WHO ARE WE?</a></li>
                <li><a href="#">CAREERS</a></li>
                <li><a href="#">AUTHENTICITY</a></li>
                <li><a href="#">PRESS</a></li>
                <li><a href="#">TESTIMONIALS</a></li>
                <li><a href="#">NYKAA CSR</a></li>
                <li><a href="#">RESPONSIBLE DISCLOSURE</a></li>
                <li><a href="#">INVESTOR RELATIONS</a></li>
            </ul>
        </div>
        <div class="foo_menu_container">
            <ul>
                <li>HELP</li>
                <li><a href="#">CONTACT US</a></li>
                <li><a href="#">FREQUENTLY ASKED QUESTIONS</a></li>
                <li><a href="#">STORE LOCATOR</a></li>
                <li><a href="#">CANCELLATION & RETURN</a></li>
                <li><a href="#">SHIPPING & DELIVERY<a></li>
                <li><a href="#">SELL ON NYKAA</a></li>
            </ul>
        </div>
        <div class="foo_menu_container">
            <ul>
                <li>INSPIRE ME</li>
                <li><a href="#">BEAUTY BOOK</a></li>
                <li><a href="#">NYKAA TV</a></li>
                <li><a href="#">NYKAA NETWORK</a></li>
                <li><a href="#">BUYING GUIDES</a></li>
            </ul>
        </div>
        <div class="foo_menu_container">
            <ul>
                <li>QUICK LINKS</li>
                <li><a href="#">OFFER ZONE</a></li>
                <li><a href="#">NEW LAUNCHES</a></li>
                <li><a href="#">NYKAA MAN</a></li>
                <li><a href="#">NYKAA FASHION</a></li>
                <li><a href="#">NYKAA PRO</a></li>
                <li><a href="#">NYKAA FEMINA BEAUTY AWARDS WINNERS 2019</a></li>
                <li><a href="#">SITEMAP</a></li>
            </ul>
            
        </div>
        <div class="foo_menu_container">
            <ul>
                <li>TOP CATEGORIES</li>
                <li><a href="#">MAKEUP</a></li>
                <li><a href="#">SKIN</a></li>
                <li><a href="#">HAIR</a></li>
                <li><a href="#">PERSONAL CARE</a></li>
                <li><a href="#">APPLIANCES</a></li>
                <li><a href="#">MOM AND BABY</a></li>
                <li><a href="#">WELLNESS</a></li>
                <li><a href="#">FRAGRANCE</a></li>
                <li><a href="#">NATURAL</a></li>
                <li><a href="#">LUXE</a></li>
            </ul>
            
        </div>
    </div>

    <div id="foo_social">
        <div id="foo_social_prod_icons">
            <div class="product_guideline">
                <div class="icon_wrapper">
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg" alt="FREE SHIPPING">
                </div>
                <div class="text_wrapper">
                    <div class="prod_heading">
                        <h3>FREE SHIPPING</h3> 
                    </div>
                    <div class="text_content">
                        <p>for orders above INR499</p>
                    </div>
                </div>
            </div>
            <div class="product_guideline">
                <div class="icon_wrapper">
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg" alt="EASY RETURNS">
                </div>
                <div class="text_wrapper">
                    <div class="prod_heading">
                        <h3>EASY RETURNS</h3>
                    </div>
                    <div class="text_content">
                        <p>15 Day Easy Returns For Most Products</p>
                    </div>
                </div>
            </div>
            <div class="product_guideline">
                <div class="icon_wrapper">
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg" alt="AUTHENTIC PRODUCTS">
                </div>
                <div class="text_wrapper">
                    <div class="prod_heading">
                        <h3>AUTHENTIC PRODUCTS</h3> 
                    </div>
                    <div class="text_content">
                        <p>Sourced Directly from Brands/ Authorised Distributors</p>
                    </div>
                </div>
            </div>
            <div class="product_guideline">
                <div class="icon_wrapper">
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg" alt="2400+ BRANDS">
                </div>
                <div class="text_wrapper">
                    <div class="prod_heading">
                        <h3>2400+ BRANDS</h3>
                    </div>
                    <div class="text_content">
                        <p>Well Curated 1.9Lakh <br> + Product</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="foo_social_icons">
            <div id="foo_social_icons_heading">
                <h2>SHOW US SOME LOVE ❤ ON<br>SOCIAL MEDIA</h2>
            </div>
            <div id="foo_social_icons">
                <ul>
                    <li>
                        <a href="https://www.instagram.com/mynykaa/?ref=badge" target="_blank"><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg" alt="instagram"></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/MyNykaa" target="_blank"><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg" alt="facebook"></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCoaH2UtB1PsV7av17woV1BA" target="_blank"><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg" alt="youtube"></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/MyNykaa" target="_blank"><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg" alt="twitter"></a>
                    </li>
                    <li>
                        <a href="https://www.pinterest.com/mynykaa/" target="_blank"><img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg" alt="pintrest"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div id="foo_last">
        <div>
            <a href="#">TERMS & CONDITIONS</a>
            <a href="#">SHIPPING POLICY</a>
            <a href="#">CANCELLATION POLICY</a>
            <a href="#">PRIVACY POLICY</a>
        </div>
        <div>
            <p><span>&copy;</span> Nykaa E-Retail Pvt. Ltd.All Rights Reserved</p>
        </div>
    </div>
    `

}

export {FOOTER}