var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    //'mapbox://styles/kwstancil/cl741bb3i000r14nvyq5cp0g0',
    accessToken: 'pk.eyJ1Ijoia3dzdGFuY2lsIiwiYSI6ImNsNnlmZ3U3dTA1cnIza255MHQyMmo5MXQifQ.ZZIWcR1AHum3EElxlyI2cQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Global Covid-19 Vaccine Apartheid',
    subtitle: 'Why have less than 25% of people in impoverished nations received at least one dose? And what’s being done to change that?',
    byline: 'By Kenny Stancil',
    footer: 'Sources: <a href="https://github.com/owid/covid-19-data/tree/master/public/data" target="_blank">Vaccination rates</a> come courtesy of Our World in Data - see Mathieu, E., Ritchie, H., Ortiz-Ospina, E. <i>et al</i>. A global database of COVID-19 vaccinations. <i>Nat Hum Behav</i> (2021); Information about whether governments <a href="https://msfaccess.org/no-patents-no-monopolies-pandemic" target="_blank">support or oppose the TRIPS waiver proposal</a> supplied by Doctors Without Borders; Data on <a href="https://www.hrw.org/news/2021/12/15/experts-identify-100-plus-firms-make-covid-19-mrna-vaccines" target="_blank">untapped vaccine production potential</a> compiled by Human Rights Watch and the AccessIBSA project. <a href="https://medicinespatentpool.org/news-publications-post/who-and-mpp-announce-names-of-15-manufactures-to-receive-training-from-mrna-technology-transfer-hub" target="_blank">Participants in the WHO-led mRNA vaccine technology transfer hub</a> listed by the Medicines Patent Pool. <a href="https://www.naturalearthdata.com/downloads/50m-cultural-vectors/" target="_blank">National boundaries</a> and <a href="https://gavinr.com/open-data/world-countries-centroids/" target="_blank">country centroids</a> provided by Natural Earth and Gavin Rehkemper, respectively.<p>Thank you to Ryan Cooper and Boyd Shearer, for helping me with the earliest iterations of this map, and to Jay Bowen and Rich Donohue, for helping me to improve it more recently.<p>See my <a href="https://kwstancil.github.io/map-portfolio/" target="_blank">portfolio</a>.<p>Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'introduction',
            alignment: 'center',
            hidden: false,
            title: 'Introduction',
            description: 'Comparing Covid-19 vaccination rates around the world over time reveals glaring and persistent gaps in access to lifesaving shots amid a pandemic that has <a href="https://www.who.int/data/stories/global-excess-deaths-associated-with-covid-19-january-2020-december-2021" target="_blank">caused</a> more than 15 million deaths. While high-income countries discard doses, billions of people in low-income countries remain completely unprotected.<p>This injustice, which public health advocates have labeled "vaccine apartheid," is deadly. New research estimates that in 2021, the first year of the vaccine rollout, jabs <a href="https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(22)00320-6/fulltext" target="_blank">saved</a> roughly 20 million lives. However, hundreds of thousands of additional deaths could have been avoided—and many more can still be prevented—with greater vaccine equity.<p>Epidemiologists have consistently warned that the longer SARS-CoV-2 circulates and mutates, the greater the chances a vaccine-resistant variant emerges, making the swift and adequate inoculation of the global population an urgent necessity to protect the well-being of people everywhere.<p><b>Just how unequal has vaccine access been? Keep scrolling to find out.</b>',
            image: './images/covid-oxygen-south-africa.jpg',
            caption: 'Photo: People are seen lying on hospital beds inside a temporary ward dedicated to the treatment of Covid-19 patients at Steve Biko Academic Hospital in Pretoria, South Africa on January 11, 2021. (Phill Magakoe/AFP via Getty Images)',
            location: {
                center: [10.55606, 35.19720],
                zoom: 1.25,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'vaxrates',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe class="iframe" width=100% height='+ window.innerHeight +' src="vax_index.html" title="global-covid-19-vaccine-apartheid" style="border:none;"></iframe>',
            caption: '',
            location: {
                center: [10.55606, 35.19720],
                zoom: 1.25,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:'',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'reasons',
            alignment: 'left',
            hidden: false,
            title: 'Why has immunization against Covid-19 been so uneven?',
            description: 'There are two key sources of vaccine inequality.<p>1) <b>Inequitable distribution, or dose hoarding by wealthy nations</b>: Rich governments <a href="https://www.nytimes.com/interactive/2021/03/31/world/global-vaccine-supply-inequity.html" target="_blank">quickly purchased</a> far more shots than could possibly be administered to their own populations. As a result of this vaccine nationalism, millions of doses have <a href="https://www.doctorswithoutborders.org/latest/us-must-stop-hoarding-excess-covid-19-vaccine-doses" target="_blank">expired</a> and ended up in the trash.<p>2) <b>Inefficient production, or knowledge hoarding by pharmaceutical corporations</b>: Pharma giants have <a href="https://msfaccess.org/no-patents-no-monopolies-pandemic" target="_blank">refused to share</a> vaccine formulas and production blueprints with generic drugmakers. Big Pharma’s monopoly power over publicly funded tech and know-how has led to artificial scarcity, <a href="https://www.oxfam.org/en/press-releases/vaccine-monopolies-make-cost-vaccinating-world-against-covid-least-5-times-more" target="_blank">price-gouging</a>, <a href="https://www.thebureauinvestigates.com/stories/2021-02-23/held-to-ransom-pfizer-demands-governments-gamble-with-state-assets-to-secure-vaccine-deal" target="_blank"> risk-shifting</a>, and attendant record-breaking profits—prolonging needless suffering while turning several executives into <a href="https://   www.oxfam.org/en/press-releases/covid-vaccines-create-9-new-billionaires-combined-wealth-greater-cost-vaccinating" target="_blank">billionaires</a>.',
            image: './images/patents-could-kill-us-all.jpg',
            caption: 'Photo: A woman tapes protest signs around the Pfizer logo during a demonstration at the company’s headquarters on July 14, 2021 in Manhattan. (Michael M. Santiago/Getty Images)',
            location: {
                center: [10.55606, 35.19720],
                zoom: 1.25,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'efforts',
            alignment: 'left',
            hidden: false,
            title: 'What is being done to combat vaccine inequality?',
            description: 'Efforts to increase access to vaccines have primarily revolved around two distinct approaches.<p>1) <b>Distribution angle</b>: COVAX, the United Nations-backed public-private partnership to encourage vaccine donations to poor governments, has <a href="https://peoplesvaccine.org/resources/media-releases/g7/" target="_blank">fallen far short</a> of its own targets, leading critics to declare the charity model a failure.<p>2) <b>Production angle</b>: A campaign to compel the World Trade Organization (WTO) to temporarily remove intellectual property (IP) barriers was recently defeated by a handful of rich governments, but several other initiatives are underway at the World Health Organization (WHO) and at national and cross-national levels to share vaccine formulas, transfer technology, and increase generic manufacturing.',
            image: './images/free-the-vaccine.jpg',
            caption: 'Photo: Health justice advocates call on Pfizer to share Covid-19 vaccine formulas and transfer technology during a demonstration outside the company’s headquarters in Manhattan on March 11, 2021. (Erik McGregor/LightRocket via Getty Images)',
            location: {
                center: [10.55606, 35.19720],
                zoom: 1.25,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'tripsintro',
            alignment: 'right',
            hidden: false,
            title: 'A) TRIPS waiver: India and South Africa unveil potentially game-changing proposal',
            description: 'On October 2, 2020, India and South Africa <a href="https://docs.wto.org/dol2fe/Pages/SS/directdoc.aspx?filename=q:/IP/C/W669.pdf&Open=True" target="_blank">introduced</a> a motion at the WTO to suspend coronavirus-related patents and other IP barriers for the duration of the pandemic, which would enable generic drugmakers to expand the global supply of vaccines, tests, and treatments without fear of legal retribution.',
            image: './images/india-trips-proposal.jpg',
            caption: 'Photo: A resident watches an artist put the finishing touches on a mural depicting frontline workers carrying a Covid-19 vaccine in Kolkata, India on January 2, 2021. (Dibyangshu Sarkar/AFP via Getty Images)',
            location: {
                center: [40.38602, -18.53467],
                zoom: 2.4,
                pitch: 0,
                bearing: -21.3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'tripsmap1',
            alignment: 'right',
            hidden: false,
            title: 'A) TRIPS waiver: Despite widespread support, the proposal meets stiff resistance',
            description: '<b>More than 100 nations, including the vast majority of the Global South, <a href="https://msfaccess.org/no-patents-no-monopolies-pandemic" target="_blank">endorsed</a> the proposal to temporarily waive the WTO’s corporate-friendly Trade-Related Aspects of Intellectual Property Rights (TRIPS) Agreement</b>. Treating medical tools designed to defeat Covid-19 as global public goods was also the preference of a majority of voters in high-income countries, <a href="https://www.commondreams.org/news/2021/06/18/94-americans-oppose-big-pharmas-control-global-covid-19-vaccine-supply-poll" target="_blank">according to</a> polls.<p><b>However, a handful of Big Pharma-aligned policymakers—most of them from highly vaccinated parts of Europe—spent nearly 21 months stonewalling the popular measure</b>, which needed unanimous support from the WTO’s 164 members to pass.<p><b>During that time, the global death toll <a href="https://ourworldindata.org/excess-mortality-covid#estimated-excess-mortality-from-the-world-health-organization" target="_blank">soared</a> by more than 12 million</b>. Excess mortality—an estimate of the difference in the number of deaths that occur amid a crisis compared with what would have been expected under “normal” conditions—during the coronavirus pandemic has been <a href="https://www.oxfam.org.uk/media/press-releases/covid-death-toll-four-times-higher-in-poorer-countries-than-rich-countries/"   target="_blank">four times higher</a> in poorer countries than rich ones.<p>“Millions have died while the governments of rich countries have been bickering over monopoly rights for Covid-19 vaccines,” Nick Dearden, the director of Global Justice Now, said in July 2021. “Every one of those deaths is a mark of shame for the governments of countries like the U.K. and Germany who have protected patents over human lives.”<p>',
            image: './images/merkel-trips-protest.jpg',
            caption: 'Photo: An effigy of then-German Chancellor Angela Merkel stands over body bags during a protest calling for the suspension of coronavirus-related patents in front of the White House in Washington, D.C. on July 15, 2021. (Mandel Ngan/AFP via Getty Images)',
            location: {
                center: [10.55606, 35.19720],
                zoom: 1.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 1
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              }
            ]
        },
        {
            id: 'tripsmap2',
            alignment: 'left',
            hidden: false,
            title: 'A) TRIPS waiver: Big Pharma claims that lifting patents won’t help augment supply—even after experts identify more than 100 potential manufacturers in the Global South',
            image: '',
            description: 'In a thinly veiled attempt to perpetuate Big Pharma’s extremely profitable IP monopolies, industry lobbyists and their lawmaking allies asserted without evidence that the TRIPS waiver wouldn’t lead to an increase the worldwide supply of vaccines. Their argument? Generic producers in developing countries lack the capacity to replicate the mRNA manufacturing process. This racist talking point persisted even after experts <a href="https://www.hrw.org/news/2021/12/15/experts-identify-100-plus-firms-make-covid-19-mrna-vaccines" target="_blank">identified</a> <b>120 firms in Africa, Asia, and Latin America <a href="https://www.nytimes.com/interactive/2021/10/22/science/developing-country-covid-vaccines.html" target="_blank">capable</a> of making jabs if only Pfizer-BioNTech and Moderna would share vaccine recipes and tech</b>—none of which would exist in the first place without years of <a href="https://www.healthaffairs.org/do/10.1377/forefront.20210512.191448/full/" target="_blank"> taxpayer-funded research</a>.<p>Hover over the purple circles to see how many factories are lying idle as a result of corporate profiteering.',
            caption: 'Photo: ',
            location: {
                center: [10.55606, 35.19720],
                zoom: 1.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity:[
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    1.0,
                    0.8
                  ]
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              }
            ]
        },
        {
            id: 'tripsbiden',
            alignment: 'right',
            hidden: false,
            title: 'A) TRIPS waiver: Announcement of U.S. support for a limited version of the measure sparks optimism, but a year later, the India-South Africa proposal is killed',
            image: '',
            description: 'Many hoped that the White House’s May 2021 <a href="https://ustr.gov/about-us/policy-offices/press-office/press-releases/2021/may/statement-ambassador-katherine-tai-covid-19-trips-waiver" target="_blank">announcement</a> of Washington’s ostensible support for the TRIPS waiver would mark a turning point. Despite publicly endorsing the measure, however, the U.S. government behind closed doors <a href="https://inthesetimes.com/article/biden-omicron-wto-trips-waiver-intellectual-property-patents" target="_blank">stymied</a> progress, including by <a href="https://inthesetimes.com/article/covid-wto-trips-waiver-biden-european-union-intellectual-property-patents" target="_blank">insisting</a> on a vaccine-only deal that would exclude diagnostics and therapeutics even as the importance of both grows.<p>On June 17, 2022, <b>following more than a year and a half of negotiations, the WTO <a href="https://www.keionline.org/wp-content/uploads/W15R2.pdf" target="_blank">adopted</a> a watered-down alternative to the TRIPS waiver that critics have <a href="https://www.citizen.org/news/cso-statements-in-response-to-shameful-result-on-intellectual-property-and-covid-at-12th-wto-ministerial/" target="_blank">characterized</a> as worse than the status quo.</b>',
            caption: 'Photo: ',
            location: {
                center: [-74.50218, 37.27259],
                zoom: 4.9,
                pitch: 39.5,
                bearing: -19.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'tripsdefeat',
            alignment: 'left',
            hidden: false,
            title: 'A) TRIPS waiver: In the wake of defeat, civil society groups urge governments to defy IP rules that prioritize Big Pharma’s profits over human lives',
            image: '',
            description: 'Given that expanding supply is still <a href="https://www.prep4all.org/news/22-billion-more-mrna-vaccines-needed-to-stop-omicron-study-finds" target="_blank">necessary</a> to achieve equitable global access to tests, treatments, and vaccines—especially as booster shot eligibility increases and next-generation jabs tailored to new variants emerge—<b>hundreds of civil society groups have <a href="https://tradejusticeedfund.org/governments-must-break-big-pharma-wto-stranglehold-on-access-to-medicine/" target="_blank">urged</a> governments to “take immediate actions to bypass the WTO’s prioritization of pharmaceutical monopolies over human lives.”</b>',
            caption: 'Photo: ',
            location: {
                center: [10.55606, 35.19720],
                zoom: 1.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'ctap',
            alignment: 'left',
            hidden: false,
            title: 'B) Covid-19 Technology Access Pool',
            image: '',
            description: 'In May 2020, a few months before the TRIPS waiver proposal was first unveiled, the WHO and its partners <a href="https://www.who.int/initiatives/covid-19-technology-access-pool" target="_blank">launched</a> the Covid-19 Technology Access Pool (C-TAP) to facilitate the sharing of IP, knowledge, and clinical data. The goal of C-TAP is to ramp up production through voluntary licensing agreements and the exchange of know-how between the developers of vaccines, tests, and treatments, on the one hand, and qualified manufacturers with untapped capacity, on the other.<p>Hampered by virtually nonexistent private sector participation, the first transparent, global, non-exclusive license for a Covid-19 medical tool was <a href="https://medicinespatentpool.org/news-publications-post/who-and-mpp-announce-the-first-transparent-global-non-exclusive-licence-for-a-covid-19-technology" target="_blank">finalized</a> in November 2021, when the Spanish National Research Council agreed to share the serological antibody technology underlying multiple tests.<p>In May 2022, the U.S. National Institutes of Health (NIH) agreed to share 11 technologies—including the stabilized spike protein used in currently available Covid-19 vaccines—with manufacturers from around the world via the repository.',
            caption: 'Photo: ',
            location: {
                center: [6.70594, 46.17994],
                zoom: 5.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'techtransfer',
            alignment: 'left',
            hidden: false,
            title: 'C) mRNA Vaccine Technology Transfer Hub in South Africa: WHO aims to boost local production of doses; Afrigen replicates Moderna jab despite Big Pharma interference',
            image: '',
            description: 'In April 2021, as the TRIPS waiver and C-TAP efforts floundered, the WHO and its partners <a href="https://www.who.int/news-room/articles-detail/call-for-expression-of-interest-to-contribute-to-the-establishment-of-a-covid-19-mrna-vaccine-technology-transfer-hub" target="_blank">called</a> for the establishment of at least one mRNA vaccine technology transfer hub to <a href="https://www.nature.com/immersive/d41586-022-01898-3/index.html" target="_blank">build capacity</a> in low- and middle-income countries (LMICs) to produce doses locally. Two months later, the first consortium—based at Afrigen Biologics in Cape Town, South Africa—was <a href="https://www.who.int/initiatives/the-mrna-vaccine-technology-transfer-hub" target="_blank">launched</a>.<p>By February 2022, scientists at the Afrigen hub were able to <a href="https://www.nature.com/articles/d41586-022-00293-2" target="_blank">replicate</a> Moderna’s mRNA Covid-19 vaccine despite Big Pharma’s best efforts to <a href="https://www.bmj.com/content/376/bmj.o304" target="_blank">undermine</a> their work. Instead of supporting the collaborative effort, Moderna <a href="https://msfaccess.org/removing-intellectual-property-barriers-covid-19-vaccines-and-treatments-people-south-africa" target="_blank">filed</a> multiple mRNA vaccine patents in South Africa—after withdrawing or abandoning equivalent patents in several other countries—thus creating legal risks that could jeopardize the hub’s output for years to come.<p>Moderna’s pledge not to enforce patents during the pandemic is “hardly reassuring,” <a href="https://app.box.com/s/hszkfopwtq3wzky7ow335qbdcvu3dhpi" target="_blank">according to</a> South African civil society groups, because the company reserves the right to unilaterally declare when the pandemic is over, at which point it could invoke IP barriers to stifle generic production.',
            caption: 'Photo: ',
            location: {
                center: [17.37173, -30.49951],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'techspokes',
            alignment: 'right',
            hidden: false,
            title: 'C) mRNA Vaccine Technology Transfer Hub in South Africa: Afrigen hub identifies 15 "spokes"; WHO and South Korea vow to build global teaching facility',
            image: '',
            description: 'As of April 2022, 15 manufacturers in LMICs have been <a href="https://medicinespatentpool.org/news-publications-post/who-and-mpp-announce-names-of-15-manufactures-to-receive-training-from-mrna-technology-transfer-hub" target="_blank">named</a> as “spokes,” or recipients of mRNA technology and training from the Afrigen hub. In addition, the WHO has teamed up with South Korea to <a href="https://www.who.int/news/item/23-02-2022-moving-forward-on-goal-to-boost-local-pharmaceutical-production-who-establishes-global-biomanufacturing-training-hub-in-republic-of-korea" target="_blank">create</a> a global biomanufacturing teaching facility that will showcase best practices and complement specific trainings developed by researchers involved in the South African project.<p>Hover over the orange countries to see the names of participating manufacturers.',
            caption: 'Photo: ',
            location: {
                center: [94.59787, 31.01989],
                zoom: 2.1,
                pitch: 60,
                bearing: -104
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    1.0,
                    0.8
                  ]
              },
              {
                  layer: 'who_instruction',
                  opacity: 0.8
              }
            ],
            onChapterExit: []
        },
        {
            id: 'technih',
            alignment: 'left',
            hidden: false,
            title: 'C) mRNA Vaccine Technology Transfer Hub in South Africa: U.S. scientists agree to share know-how with Afrigen',
            image: '',
            description: 'In July 2022, U.S. government scientists from the National Institutes of Allergy and Infectious Diseases (NIAID) <a href="https://www.afrigen.co.za/2022/07/08/afrigen-and-nih-to-collaborate-on-mrna-vaccine-production-research/" target="_blank">agreed</a> to share technical know-how related to the development of next-generation vaccines and treatments with Afrigen. NIAID pioneered the use of mRNA and its parent organization, NIH, co-invented Moderna’s Covid-19 vaccine. Together, NIAID and Afrigen seek to expedite the production of mRNA vaccines—not only to combat the ongoing coronavirus pandemic but also to address other infectious diseases and cancer.<p>The production of mRNA vaccines “is very different,” Zain Rizvi, research director with Public Citizen’s Access to Medicines Program, <a href="https://democracyjournal.org/voices-of-the-virus/the-u-s-government-has-to-take-back-control/" target="_blank">explains</a>. “It requires far less physical space, it is far less capital intensive, the processes are shorter and simpler than traditional vaccine manufacturing. A lot more manufacturers can do it.”<p>“You can setup a new production line for only around $60 million,” he continues. “That potential has not been fully realized because a few corporations have dictated who can make mRNA vaccines, how they can make them, where they can make them, and at what price.”<p>Hover over the orange countries to see the names of participating manufacturers.',
            caption: 'Photo: ',
            location: {
                center: [10.55606, 35.19720],
                zoom: 1.25,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    1.0,
                    0.8
                  ]
              },
              {
                  layer: 'who_instruction',
                  opacity: 0.8
              }
            ],
            onChapterExit: [
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ]
        },
        // {
        //     id: 'biden1',
        //     alignment: 'right',
        //     hidden: false,
        //     title: 'D) Will the U.S. government exercise its power to rein in Big Pharma and scale up vaccine production?',
        //     image: '',
        //     description: 'Text in progress',
        //     caption: 'Photo: ',
        //     location: {
        //         center: [-74.50218, 37.27259],
        //         zoom: 4.9,
        //         pitch: 39.5,
        //         bearing: -19.23
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //       {
        //           layer: 'vaccination_rates',
        //           opacity: 0
        //       },
        //       {
        //           layer: 'support_trips_waiver',
        //           opacity: 0
        //       },
        //       {
        //           layer: 'idle_production_capacity',
        //           opacity: 0
        //       },
        //       {
        //           layer: 'who_spokes',
        //           opacity: 0
        //       },
        //       {
        //           layer: 'who_instruction',
        //           opacity: 0
        //       }
        //     ],
        //     onChapterExit: []
        // },
        // {
        //     id: 'biden2',
        //     alignment: 'right',
        //     hidden: false,
        //     title: 'D) Will the U.S. government exercise its power to rein in Big Pharma and scale up vaccine production?',
        //     image: '',
        //     description: 'Text in progress',
        //     caption: 'Photo: ',
        //     location: {
        //         center: [-74.50218, 37.27259],
        //         zoom: 4.9,
        //         pitch: 39.5,
        //         bearing: -19.23
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //       {
        //           layer: 'vaccination_rates',
        //           opacity: 0
        //       },
        //       {
        //           layer: 'support_trips_waiver',
        //           opacity: 0
        //       },
        //       {
        //           layer: 'idle_production_capacity',
        //           opacity: 0
        //       },
        //       {
        //           layer: 'who_spokes',
        //           opacity: 0
        //       },
        //       {
        //           layer: 'who_instruction',
        //           opacity: 0
        //       }
        //     ],
        //     onChapterExit: []
        // },
        // {
        //     id: 'biden3',
        //     alignment: 'right',
        //     hidden: false,
        //     title: 'D) Will the U.S. government exercise its power to rein in Big Pharma and scale up vaccine production?',
        //     image: '',
        //     description: 'Text in progress',
        //     caption: 'Photo: ',
        //     location: {
        //         center: [-74.50218, 37.27259],
        //         zoom: 4.9,
        //         pitch: 39.5,
        //         bearing: -19.23
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //       {
        //           layer: 'vaccination_rates',
        //           opacity: 0
        //       },
        //       {
        //           layer: 'support_trips_waiver',
        //           opacity: 0
        //       },
        //       {
        //           layer: 'idle_production_capacity',
        //           opacity: 0
        //       },
        //       {
        //           layer: 'who_spokes',
        //           opacity: 0
        //       },
        //       {
        //           layer: 'who_instruction',
        //           opacity: 0
        //       }
        //     ],
        //     onChapterExit: []
        // },
        {
            id: 'cuba',
            alignment: 'right',
            hidden: false,
            title: 'D) Cuba’s public biotech sector',
            image: '',
            description: 'Cuba’s thriving public biotech sector, which has <a href="https://www.commondreams.org/news/2021/11/24/cubas-homegrown-covid-19-vaccines-poised-protect-millions-poor-nations" target="_blank">developed</a> two highly effective vaccines despite the <a href="https://www.commondreams.org/news/2022/01/19/bank-blocks-donations-supporting-cuban-effort-vaccinate-world" target="_blank">added challenges</a> created by a 60 year-long U.S. embargo, provides a striking example of an alternative model for scientific research that puts people over profits. The island has begun exporting its homegrown doses and has agreed to <a href="https://www.commondreams.org/news/2022/01/25/historic-turning-point-cuba-issues-plan-vaccine-internationalism" target="_blank">share</a> its recipes and technical information with impoverished nations abandoned by Big Pharma and wealthy countries, thus demonstrating the power of decommodified medicine.<p>Unlike the mRNA jabs produced by Pfizer and Moderna, Cuba opted to make vaccines that rely on a more traditional protein-based technology. These shots can be stored at room temperature, making distribution easier, especially in developing countries and remote areas that lack electricity.',
            caption: 'Photo: ',
            location: {
                center: [-74.94211, 23.07219 ],
                zoom: 5.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'corbevax',
            alignment: 'right',
            hidden: false,
            title: 'E) Corbevax, the patent-free vaccine',
            image: '',
            description: 'Another promising example of an internationally collaborative endeavor that prioritizes people’s health above all else is Corbevax—an open-source alternative to Big Pharma’s privatized jabs that has been dubbed “the world’s Covid-19 vaccine.”<p>The protein-based shot—jointly developed by researchers at Texas Children’s Hospital and Baylor College of Medicine—<a href="https://www.texaschildrens.org/texas-children%E2%80%99s-hospital-and-baylor-college-medicine-covid-19-vaccine-technology-secures-emergency" target="_blank">received</a> emergency use authorization from India in late December 2021. Its creators immediately <a href="https://twitter.com/PeterHotez/status/1475839914910666767" target="_blank">transferred</a> the underlying technology to the Indian pharmaceutical firm Biological E. Limited and other drug manufacturers in Indonesia, Bangladesh, and Botswana, with the objective of facilitating the production and distribution of millions of doses per month in “underserved countries.”<p>“We’re not trying to make money,” Dr. Peter Hotez said at the time. “We just want to see people get vaccinated,” he added, echoing Jonas Salk, the virologist who famously refused to patent his polio vaccine, comparing it to the sun.',
            caption: 'Photo: ',
            location: {
                center: [-94.58586, 31.11613],
                zoom: 5,
                pitch: 0,
                bearing: -21.6
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Conclusion: Policies designed to maximize profits for a few have killed millions.',
            image: '',
            description: 'Existing IP rules and proposals for more democratic frameworks are matters of life-and-death.<p>Charity is not a substitute for justice. Low-income nations don’t want, and shouldn’t be forced, to wait for rich countries’ leftovers. They want, and ought to have, access to the publicly financed knowledge and technology needed to produce doses and boost the global supply of vital medicines.<p>International solidarity is <a href="https://link.springer.com/article/10.1007/s10393-022-01609-4" target="_blank">indispensable</a> to defeating Covid-19 vaccine apartheid, which shows few signs of abating as rich countries have already started <a href="https://peoplesvaccine.org/resources/media-releases/moderna-omicron-vaccine/" target="_blank">hoarding</a> the Omicron-specific boosters over which Big Pharma claims exclusive control.<p>The same underlying dynamics have given rise to other manifestations of global health inequality and threaten to reproduce uneven access to promising Covid-19 <a href="https://www.commondreams.org/news/2022/04/22/who-warns-poor-nations-could-be-pushed-end-queue-pfizer-covid-pill" target="_blank">treatments</a> such as Pfizer’s Paxlovid, and key resources in general, including the <a href="https://inthesetimes.com/article/failure-wto-trips-waiver-covid-vaccines-tests-treatments-pharmaceutical-industry" target="_blank">clean energy</a> technologies that must be deployed as rapidly and broadly as possible to stave off the most catastrophic effects of the fossil fuel-driven climate crisis.<p>“Never again should a pharmaceutical corporation receive huge sums of funding without some protection built in for the public interest,” Rizvi argues. “Governments can require that corporations, as a condition of accepting funding, set reasonable prices, provide doses to lower and middle-income countries, share technology with international institutions like the World Health Organization.”<p>“These were all possibilities, but very few of them were actually realized because governments did not make those choices,” he adds. “And so that, I hope, is one of the lessons we draw from this pandemic. It’s about how we let billions of dollars in public funding translate into tens of billions of dollars of private profits.”<P>',
            caption: 'Photo: ',
            location: {
                center: [10.55606, 35.19720],
                zoom: 1.25,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: 0
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              },
              {
                  layer: 'idle_production_capacity',
                  opacity: 0
              },
              {
                  layer: 'who_spokes',
                  opacity: 0
              },
              {
                  layer: 'who_instruction',
                  opacity: 0
              }
            ],
            onChapterExit: []
        }
    ]
};
