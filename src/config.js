var config = {
    style: 'mapbox://styles/kwstancil/cl741bb3i000r14nvyq5cp0g0',
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
    subtitle: 'Why have only 20% of people in impoverished nations received at least one dose? And what’s being done to change that?',
    byline: 'By Kenny Stancil',
    footer: 'Sources: Vaccination rates come courtesy of Our World in Data - see Mathieu, E., Ritchie, H., Ortiz-Ospina, E. et al. A global database of COVID-19 vaccinations. Nat Hum Behav (2021); Information about whether governments support or oppose the TRIPS waiver proposal supplied by Doctors Without Borders; Data on untapped vaccine production potential compiled by Human Rights Watch and the AccessIBSA project. National boundaries and country centroids provided by Natural Earth and Gavin Rehkemper, respectively.<p>Photos (in descending order): MORE<p>Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'introduction',
            alignment: 'center',
            hidden: false,
            title: 'Introduction',
            image: '',
            description: 'Comparing Covid-19 vaccination rates around the world over time reveals glaring and persistent gaps in access to lifesaving shots amid a pandemic that has caused more than 15 million deaths. While high-income countries discard doses, billions of people in low-income countries remain completely unprotected.<p>This injustice, which public health advocates have labeled "vaccine apartheid," is deadly. New research estimates that in 2021, the first year of the vaccine rollout, jabs saved roughly 20 million lives. However, hundreds of thousands of additional deaths could have been avoided—and many more can still be prevented—with greater vaccine equity.<p>Epidemiologists have consistently warned that the longer SARS-CoV-2 circulates and mutates, the greater the chances a vaccine-resistant variant emerges, making the swift and adequate inoculation of the global population an urgent necessity to protect the well-being of people everywhere.',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vaxrates',
            alignment: 'full',
            hidden: false,
            title: 'Share of Population Partially/Fully Inoculated and Number of Booster Shots Administered Per 100 People in Each Country Over Time',
            image: '',
            description: '<iframe src="https://ourworldindata.org/grapher/share-people-vaccinated-covid?tab=map&time=earliest&country=Africa~Asia~Europe~High+income~Low+income~Lower+middle+income~North+America~South+America~Upper+middle+income~USA~OWID_WRL" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe><p><iframe src="https://ourworldindata.org/grapher/share-people-fully-vaccinated-covid?tab=map&time=earliest&country=Africa~Asia~Low+income~High+income~Lower+middle+income~OWID_WRL~Upper+middle+income~USA~South+America~Europe~North+America" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe><p><iframe src="https://ourworldindata.org/grapher/covid-vaccine-booster-doses-per-capita?tab=map&time=earliest&country=Africa~Asia~High+income~Low+income~Lower+middle+income~North+America~South+America~USA~Upper+middle+income~OWID_WRL~Europe" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
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
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'reasons',
            alignment: 'left',
            hidden: false,
            title: 'Why has immunization against Covid-19 been so uneven?',
            image: '',
            description: 'There are two key sources of vaccine inequality.<p>1) Inequitable distribution, or dose hoarding by wealthy nations: Rich governments quickly purchased far more shots than could possibly be administered to their own populations. As a result of this vaccine nationalism, millions of doses have expired and ended up in the trash.<p>2) Inefficient production, or knowledge hoarding by pharmaceutical corporations: Pharma giants have refused to share vaccine formulas and production blueprints with generic drugmakers. Big Pharma’s monopoly power over publicly funded tech and know-how has led to artificial scarcity, price-gouging, and attendant record-breaking profits—prolonging needless suffering while turning several executives into billionaires.',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'efforts',
            alignment: 'left',
            hidden: false,
            title: 'What is being done to combat vaccine inequality?',
            image: './images/free-the-vaccine-big-pharma-covid19-monopolies.jpg',
            description: 'Efforts to increase access to vaccines have primarily revolved around two distinct approaches.<p>1) Distribution angle: COVAX, the United Nations-backed public-private partnership to encourage vaccine donations to poor governments, has fallen far short of its own targets, leading critics to declare the charity model a failure.<p>2) Production angle: A campaign to compel the World Trade Organization (WTO) to temporarily remove intellectual property (IP) barriers was recently defeated by a handful of rich governments, but several other initiatives are underway at the World Health Organization (WHO) and at national and cross-national levels to share vaccine formulas, transfer technology, and increase generic manufacturing.',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tripsintro',
            alignment: 'right',
            hidden: false,
            title: 'A) TRIPS waiver: India and South Africa unveil potentially game-changing proposal',
            image: '',
            description: 'On October 2, 2020, India and South Africa introduced a motion at the WTO to suspend coronavirus-related patents and other IP barriers for the duration of the pandemic, which would enable generic drugmakers to expand the global supply of vaccines, tests, and treatments without fear of legal retribution.',
            location: {
                center: [40.38602, -18.53467],
                zoom: 3.25,
                pitch: 0,
                bearing: -21.3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tripsmap1',
            alignment: 'right',
            hidden: false,
            title: 'A) TRIPS waiver: Despite widespread support, the proposal meets stiff resistance',
            image: '',
            description: 'More than 100 nations, including the vast majority of the Global South, endorsed the proposal to temporarily waive the WTO’s corporate-friendly Trade-Related Aspects of Intellectual Property Rights (TRIPS) Agreement. Trreating medical tools designed to defeat Covid-19 as global public goods was also the preference of a majority of voters in high-income countries, according to polls.<p>However, a handful of Big Pharma-aligned policymakers—most of them from highly vaccinated parts of Europe—spent nearly 21 months stonewalling the popular measure, which needed unanimous support from the WTO’s 164 members to pass.<p>During that time, the global death toll soared by more than 12 million. Excess mortality—an estimate of the difference in the number of deaths that occur amid a crisis compared with what would have been expected under “normal” conditions—during the coronavirus pandemic has been four times higher in poorer countries than rich ones.<p>“Millions have died while the governments of rich countries have been bickering over monopoly rights for Covid-19 vaccines,” Nick Dearden, the director of Global Justice Now, said in July 2021. “Every one of those deaths is a mark of shame for the governments of countries like the U.K. and Germany who have protected patents over human lives.”',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'support_trips_waiver',
                    opacity: 1
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
            description: 'In a thinly veiled attempt to defend Big Pharma’s extremely profitable IP monopolies, industry lobbyists and their allies baselessly claimed that the TRIPS waiver wouldn’t lead to an increase the worldwide supply of vaccines because generic producers in developing countries lack the capacity to replicate the mRNA manufacturing process. This racist talking point persisted even after experts identified 120 firms in Africa, Asia, and Latin America capable of making jabs if only Pfizer-BioNTech and Moderna would share vaccine recipes and tech—none of which would exist in the first place without years of taxpayer-funded research.',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'idle_production_capacity',
                    opacity: 1
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
            description: 'Many hoped that the White House’s May 2021 announcement of Washington’s ostensible support for the TRIPS waiver would mark a turning point. Despite publicly endorsing the measure, however, the U.S. government behind closed doors stymied progress, including by insisting on a vaccine-only deal that would exclude diagnostics and therapeutics even as the importance of both grows.<p>On June 17, 2022, following more than a year and a half of negotiations, the WTO adopted a watered-down alternative to the TRIPS waiver that critics have characterized as worse than the status quo.',
            location: {
                center: [-74.50218, 37.27259],
                zoom: 4.9,
                pitch: 39.5,
                bearing: -19.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tripsdefeat',
            alignment: 'left',
            hidden: false,
            title: 'A) TRIPS waiver: In the wake of defeat, civil society groups urge governments to defy IP rules that prioritize Big Pharma’s profits over human lives',
            image: '',
            description: 'Given that expanding supply is still necessary to achieve equitable global access to tests, treatments, and vaccines—especially as primary series and booster shot eligibility increases and next-generation jabs tailored to new variants emerge—hundreds of civil society groups have urged governments to “take immediate actions to bypass the WTO’s prioritization of pharmaceutical monopolies over human lives.”',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ctap',
            alignment: 'left',
            hidden: false,
            title: 'B) Covid-19 Technology Access Pool',
            image: '',
            description: 'In May 2020, a few months before the TRIPS waiver proposal was first unveiled, the WHO and its partners launched the Covid-19 Technology Access Pool (C-TAP) to facilitate the sharing of IP, knowledge, and clinical data. The goal of C-TAP is to ramp up production through voluntary licensing agreements and the exchange of know-how between the developers of vaccines, tests, and treatments, on the one hand, and qualified manufacturers with untapped capacity, on the other.<p>Hampered by virtually nonexistent private sector participation, the first transparent, global, non-exclusive license for a Covid-19 medical tool was finalized in November 2021, when the Spanish National Research Council agreed to share the serological antibody technology underlying multiple tests.<p>In May 2022, the U.S. National Institutes of Health (NIH) agreed to share 11 technologies—including the stabilized spike protein used in currently available Covid-19 vaccines—with manufacturers from around the world via the repository.',
            location: {
                center: [8.70594, 46.17994],
                zoom: 5.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'techtransfer',
            alignment: 'left',
            hidden: false,
            title: 'C) mRNA Vaccine Technology Transfer Hub in South Africa: WHO aims to boost local production of doses; Afrigen replicates Moderna jab despite Big Pharma interference',
            image: '',
            description: 'In April 2021, as the TRIPS waiver and C-TAP efforts floundered, the WHO and its partners called for the establishment of at least one mRNA vaccine technology transfer hub to build capacity in low- and middle-income countries (LMICs) to produce doses locally. Two months later, the first consortium—based at Afrigen Biologics in Cape Town, South Africa—was launched.<p>By February 2022, scientists at the Afrigen hub were able to replicate Moderna’s mRNA Covid-19 vaccine despite Big Pharma’s best efforts to undermine their work. Instead of supporting the collaborative effort, Moderna filed multiple mRNA vaccine patents in South Africa—after withdrawing or abandoning equivalent patents in several other countries—thus creating legal risks that could jeopardize the hub’s output for years to come.<p>Moderna’s pledge not to enforce patents during the pandemic is “hardly reassuring,” according to South African civil society groups, because the company reserves the right to unilaterally declare when the pandemic is over, at which point it could invoke IP barriers to stifle generic production.',
            location: {
                center: [17.37173, -30.49951],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'techspokes',
            alignment: 'right',
            hidden: false,
            title: 'C) mRNA Vaccine Technology Transfer Hub in South Africa: Afrigen hub identifies 15 "spokes"; WHO and South Korea vow to build global teaching facility',
            image: '',
            description: 'As of April 2022, 14 manufacturers in LMICs have been named as “spokes,” or recipients of mRNA technology and training from the Afrigen hub. In addition, the WHO has teamed up with South Korea to create a global biomanufacturing teaching facility that will showcase best practices and complement specific trainings developed by researchers involved in the South African project',
            location: {
                center: [94.59787, 31.01989],
                zoom: 2.99,
                pitch: 60,
                bearing: -104
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'who_spokes',
                    opacity: 1
                },
                {
                    layer: 'who_instruction',
                    opacity: 1
                }
            ],
        },
        {
            id: 'technih',
            alignment: 'left',
            hidden: false,
            title: 'C) mRNA Vaccine Technology Transfer Hub in South Africa: U.S. scientists agree to share know-how with Afrigen',
            image: '',
            description: 'In July 2022, U.S. government scientists from the National Institutes of Allergy and Infectious Diseases (NIAID) agreed to share technical know-how related to the development of next-generation vaccines and treatments with Afrigen. NIAID pioneered the use of mRNA and its parent organization, NIH, co-invented Moderna’s Covid-19 vaccine. Together, NIAID and Afrigen seek to expedite the production of mRNA vaccines—not only to combat the ongoing coronavirus pandemic but also to address other infectious diseases and cancer.<p>The production of mRNA vaccines “is very different,” Zain Rizvi, research director with Public Citizen’s Access to Medicines Program, explains. “It requires far less physical space, it is far less capital intensive, the processes are shorter and simpler than traditional vaccine manufacturing. A lot more manufacturers can do it.”<p>“You can setup a new production line for only around $60 million,” he continues. “That potential has not been fully realized because a few corporations have dictated who can make mRNA vaccines, how they can make them, where they can make them, and at what price.”',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'who_spokes',
                    opacity: 1
                },
                {
                    layer: 'who_instruction',
                    opacity: 1
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
        {
            id: 'biden1',
            alignment: 'right',
            hidden: false,
            title: 'D) Will the U.S. government exercise its power to rein in Big Pharma and scale up vaccine production?',
            image: '',
            description: 'Text in progress',
            location: {
                center: [-74.50218, 37.27259],
                zoom: 4.9,
                pitch: 39.5,
                bearing: -19.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'biden2',
            alignment: 'right',
            hidden: false,
            title: 'D) Will the U.S. government exercise its power to rein in Big Pharma and scale up vaccine production?',
            image: '',
            description: 'Text in progress',
            location: {
                center: [-74.50218, 37.27259],
                zoom: 4.9,
                pitch: 39.5,
                bearing: -19.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'biden3',
            alignment: 'right',
            hidden: false,
            title: 'D) Will the U.S. government exercise its power to rein in Big Pharma and scale up vaccine production?',
            image: '',
            description: 'Text in progress',
            location: {
                center: [-74.50218, 37.27259],
                zoom: 4.9,
                pitch: 39.5,
                bearing: -19.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cuba',
            alignment: 'right',
            hidden: false,
            title: 'E) Cuba’s public biotech sector',
            image: '',
            description: 'Cuba’s thriving public biotech sector, which has developed two highly effective vaccines despite the added challenges created by a 60 year-long U.S. blockade, provides a striking example of an alternative model for scientific research that puts people over profits. The island has begun exporting its homegrown doses and has agreed to share its recipes and technical information with impoverished nations abandoned by Big Pharma and wealthy countries, thus demonstrating the power of decommodified medicine.<p>Unlike the mRNA jabs produced by Pfizer and Moderna, Cuba opted to make vaccines that rely on a more traditional protein-based technology. These shots can be stored at room temperature, making distribution easier, especially in developing countries and remote areas that lack electricity.',
            location: {
                center: [-74.94211, 23.07219 ],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'corbevax',
            alignment: 'right',
            hidden: false,
            title: 'F) Corbevax, the patent-free vaccine',
            image: '',
            description: 'Another promising example of an internationally collaborative endeavor that prioritizes people’s health above all else is Corbevax—an open-source alternative to Big Pharma’s privatized jabs that has been dubbed “the world’s Covid-19 vaccine.”<p>The protein-based shot—jointly developed by researchers at Texas Children’s Hospital and Baylor College of Medicine—received emergency use authorization from India in late December 2021. Its creators immediately transferred the underlying technology to the Indian pharmaceutical firm Biological E. Limited and other drug manufacturers in Indonesia, Bangladesh, and Botswana, with the objective of facilitating the production and distribution of millions of doses per month in “underserved countries.”<p>“We’re not trying to make money,” Dr. Peter Hotez said at the time. “We just want to see people get vaccinated,” he added, echoing Jonas Salk, the virologist who famously refused to patent his polio vaccine, comparing it to the sun.',
            location: {
                center: [-94.58586, 31.11613],
                zoom: 5,
                pitch: 0,
                bearing: -21.6
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Conclusion: Policies designed to maximize profits at the expense of the many have killed millions.',
            image: '',
            description: 'Existing IP rules and proposals for more democratic frameworks are matters of life-and-death. Nobody is safe until everybody is safe!<p>Charity is not a substitute for justice. Low-income nations don’t want, and shouldn’t be forced, to wait for rich countries’ leftovers. They want, and ought to have, access to the publicly financed knowledge and technology needed to produce doses and boost the global supply of life-saving medicines.<p>International solidarity is indispensable to defeating Covid-19 vaccine apartheid, which shows few signs of abating as rich countries have already started hoarding the Omicron-specific boosters over which Moderna claims exclusive control.<p>The same underlying dynamics have given rise to other manifestations of global health inequality and threaten to reproduce uneven access to promising Covid-19 treatments such as Pfizer’s Paxlovid, and key resources in general, including the clean energy technologies that must be deployed as rapidly and broadly as possible to stave off the most catastrophic effects of the fossil fuel-driven climate crisis.<p>“Never again should a pharmaceutical corporation receive huge sums of funding without some protection built in for the public interest,” Rizvi argues. “Governments can require that corporations, as a condition of accepting funding, set reasonable prices, provide doses to lower and middle-income countries, share technology with international institutions like the World Health Organization.”<p>“These were all possibilities, but very few of them were actually realized because governments did not make those choices,” he adds. “And so that, I hope, is one of the lessons we draw from this pandemic. It’s about how we let billions of dollars in public funding translate into tens of billions of dollars of private profits.”',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
