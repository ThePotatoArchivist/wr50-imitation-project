<script lang="ts">
    import Link from './lib/Link.svelte'
    import PathMap from './lib/PathMap.svelte'
    import ScrollAnchor from './lib/ScrollAnchor.svelte'
    import ScrollContainer from './lib/ScrollContainer.svelte'
    import SmallScreenNotice from './lib/SmallScreenNotice.svelte'
    import StreetviewMap from './lib/StreetviewMap.svelte'
    import TypedDoc from './lib/TypedDoc.svelte'
    import ZoomImage from './lib/ZoomImage.svelte'
    import {
        MAP_CENTER,
        MAP_LOCATIONS,
        STREET_VIEW_LOCATIONS,
    } from './locations'
    import * as images from './lib/images'
    import Popup from './lib/Popup.svelte'

    let progress: number = $state(0)

    let location = $derived(STREET_VIEW_LOCATIONS[Math.ceil(progress)])
</script>

<main>
    <div class="header">
        <h1>In Tandem</h1>
    </div>

    <div class="center-column">
        <h2>Preface</h2>
        <p>
            The first quarter of my 11th grade year was a lot harder than 9th
            &amp; 10th grade had been. In general, I am more comfortable and
            confident with STEM classes, but social studies classes are more
            difficult for me. In my American History class (and English to a
            lesser degree), we were often assigned a lot of reading and writing
            work. Because I was less proficient, I had trouble getting motivated
            to work on the assignments, which meant it often took me a long time
            to complete them. I tried various strategies to handle this focus
            issue, such as going to libraries, eating snacks, and getting a
            standing desk, but it was hard to find anything that consistently
            helped long-term. In fact, this is still something I deal with in
            general today.
        </p>
        <p>
            That year, I also had a Civil Engineering and Architecture (CEA)
            class. I didn't actually plan to take it, I just got switched into
            it because I had a free period. I originally wanted to switch back
            to my intended engineering class. We had to read alot as well as
            perform the artistic/interpretive/non-deterministic sort of work
            that plagued me in History. But my mind began to change with our
            architecture field trip to Downtown Los Angeles.
        </p>

        <div class="columns">
            <ZoomImage
                src={images.general_1}
                alt="Skyscrapers past an intersection" />

            <ZoomImage src={images.general_2} alt="Tall, cubical buildings" />
        </div>
    </div>

    <div class="note">Drag to look around in street view<br>Feel free to explore</div>

    <div class="scroll-layout">
        <div class="scroll-content">
            <ScrollContainer bind:progress anchor="middle">
                <div>
                    <ScrollAnchor>
                        <h2>Angels Flight</h2>
                    </ScrollAnchor>
                    <TypedDoc>
                        Angels Flight is an incline railway (funicular),
                        originally built from August to December 1901 by Colonel
                        James Ward Eddy near Clay Street. It passed through the
                        hands of seven owners. Under the Oliver &amp; Williams
                        Elevator Company, it was dismantled in May 1969 after
                        the surrounding neighborhood was demolished for "urban
                        renewal" and stored in a warehouse and was not fully
                        rebuilt until 1996, several hundred feet south of its
                        original location. Under the Angels Flight Railway
                        Foundation, it was closed from 2013 to 2017 for
                        restoration and safety upgrades.
                    </TypedDoc>
                    <p>
                        One of our first stops was Angels Flight, a very short
                        train ride up a steep hill. The ride car was shaped like
                        a trapezoid and was stepped on the inside so that the
                        inside was upright despite the angle. When I think back
                        I imagine an incline of 45&deg;, though in reality it is
                        closer to 30&deg;.
                    </p>
                    <p>
                        The ride cost $1, but when I checked my wallet I
                        realized: "Wait, I don't think I have any singles".
                        Before I even had time to process the situation I was
                        in, another student said to me, "I can lend you a
                        dollar". I was surprised&mdash;I still didn't know most
                        of my classmates very well, I probably had never spoken
                        to this classmate before, and yet he was willing to help
                        me out. "Oh- thank you!" I said. We then boarded the
                        train to ascend the hill.
                    </p>
                </div>

                <div>
                    <ScrollAnchor>
                        <h2>Walt Disney Concert Hall</h2>
                    </ScrollAnchor>
                    <TypedDoc>
                        The Walt Disney Concert Hall was designed by Frank Gehry
                        and opened in 2003, funded by a $50 million gift from
                        Lillian B. Disney in honor of her husband, the late Walt
                        Disney. It is made out of over 6,000 stainless steel
                        panels, shaped to connect back to the Dorothy Chandler
                        Pavilion. It was designed for both visuals and audio,
                        making use of skylights and a carpet to resemble Mrs.
                        Disney's garden. Gehry collaborated with acoustician Dr.
                        Yasuhisa Toyota to design the auditorium and other
                        acoustic spaces. One of their acoustic decisions was to
                        design the auditorium so that the performances sound
                        just as good with an sparse auditorium compared to a
                        packed one.
                    </TypedDoc>
                    <p>
                        The third stop on our field trip was the Walt Disney
                        Concert Hall. It was an incredible sight: massive
                        flowing metal curves at all sorts of twisting angles,
                        creating a silhouette somewhat resembling a chaotic
                        version of the Sydney opera house. Prior to the trip we
                        had been split into teams to research the structures we
                        would visit. The team presenting on the concert hall
                        mentioned the architect had designed it to look like
                        sails blowing in the wind, and it was made of hundreds
                        or thousands of custom shaped metal panels. It hardly
                        looked like a building, more like an enormous sculpture.
                    </p>
                    <div class="columns">
                        <ZoomImage
                            src={images.disney_concert_hall_1}
                            alt="Close front view of the concert hall" />
                        <ZoomImage
                            src={images.disney_concert_hall_2}
                            alt="Slightly further away front view of the concert hall showiing doors and stairs" />
                    </div>
                    <p>
                        We took a group picture, then went around the back and
                        found a nice garden with a multilayered rose-shaped
                        fountain and a pretty view of more of the city.
                    </p>
                    <div class="columns">
                        <ZoomImage
                            src={images.disney_concert_hall_3}
                            alt="Path through a garden" />
                        <ZoomImage
                            src={images.disney_concert_hall_5}
                            alt="Balcony view of the skyline" />
                    </div>
                    <p>
                        The buildings prior had been interesting, sure, but the
                        Concert Hall blew me away. I had never thought too much
                        about building aesthetics before this class. Here was
                        something probably hundreds of people put extra work
                        into making look good, requiring both creativity to
                        design and engineering to execute it.
                    </p>
                    <p>
                        I think for a large portion of my life I tended to draw
                        a divide between technical skills and projects, which I
                        was good at it, and creative projects, which I wasn't
                        good at. But the two are not mutually exclusive. Even
                        the graphing calculator and website projects I'd made in
                        the past required a mixture: Creativity to think up
                        these ideas and designs, and technical knowledge to
                        execute it. Seeing these buildings, and especially the
                        concert hall, made it clear to me that I didn't have to
                        pigeonhole myself into purely technical projects.
                    </p>
                </div>

                <div>
                    <ScrollAnchor>
                        <h2>Interlude: Gloria Molina Park</h2>
                    </ScrollAnchor>
                    <div class="columns">
                        <ZoomImage
                            src={images.gloria_molina_1}
                            alt="Walking down the center of the park" />
                        <ZoomImage
                            src={images.gloria_molina_2}
                            alt="The park fountain" />
                    </div>
                    <p>
                        At first I thought the fountain was a huge pool but it's actually
                        a thin layer of water over the ground that you can walk
                        on.
                    </p>
                </div>

                <div>
                    <ScrollAnchor>
                        <h2>Caltrans District 7 Headquarters</h2>
                    </ScrollAnchor>
                    <TypedDoc>
                        The Caltrans District 7 Headquarters is an office
                        building for California Transportation that was
                        completed in 2005. Nicknamed the "Death Star", it has
                        high concrete walls, and the south facade is covered in
                        solar panels which provide 5% of the building's power.
                        It was designed with "Morphosis" architecture which
                        means the skin moves by opening and closing panels
                        depending on the temperature and sunlight. It has
                        skip-stop elevators to conserve energy and speed up
                        circulation by encouraging employees to take the stairs.
                        The light installation is titled Motordom and was
                        designed by Keith Sonnier.
                    </TypedDoc>
                    <p>
                        The next stop was CalTrans District 7 Headquarters. It
                        was all grey, but like the Disney Concert Hall it made
                        up for its lack of color with its shape. Some sides were
                        mostly smooth, made up of panels spanning slight angles
                        and ridges. Some panels were raised, probably connected
                        to windows. Other sides were more textured, with
                        overlapping horizontal pipe structures.
                    </p>
                    <div class="columns">
                        <ZoomImage
                            src={images.caltrans_1}
                            alt="View of side of Caltrans" />
                        <ZoomImage
                            src={images.caltrans_2}
                            alt="View of side of caltrans" />
                    </div>
                    <p>
                        My team was assigned to this building. I was a bit
                        nervous about my part of the presentation, but my school
                        gives us a lot of presenting experience and I actually
                        knew what I was talking about unlike the last
                        presentation for the class, so I did fine. I talked
                        about how the building was designed with panels that
                        would open and close in response to time of day and
                        humidity, as well as the light installation title
                        "Motordom" designed to evoke cars rushing by on a
                        freeway.
                    </p>
                    <div class="columns">
                        <ZoomImage
                            src={images.caltrans_3}
                            alt="Courtyard showing Motordom" />
                    </div>
                    <p>
                        After our team finished presenting, I realized that I
                        had actually been excited to present the information I
                        knew, unlike most of the other times I had presented for
                        school. I was learning to care about the work we did in
                        this class, and caring means I'm motivated to put in the
                        work to create a higher quality output.
                    </p>
                </div>

                <div>
                    <ScrollAnchor>
                        <h2>Bradbury Building</h2>
                    </ScrollAnchor>

                    <TypedDoc>
                        The Bradbury Building was created as the last building
                        of Lewis Bradbury, a gold-mining millionaire. It was
                        designed by George Wynman, a draftsman who had no
                        architectural training, and he was inspired by a
                        commercial building in the 1887 Science Fiction Story
                        "Looking Backward", which was described as "a vast hall
                        full of light". The Bradbury Building's atrium is lit by
                        skylight and has wrought iron walkways, marble stairs,
                        and birdcage elevators. It has appeared in hundreds of
                        films, television episodes, and other video productions
                        including Bladerunner and 500 Days of Summer.
                    </TypedDoc>
                    <p>
                        The last building on our itinerary was the Bradbury
                        Building. Inside, the walls were made out of orange
                        brick, the floor was tile, and the pillars and fences
                        were ornate black metal. The team presenting on this
                        building mentioned that there were pneumatic tubes and
                        chutes used to shoot mail around the building.
                    </p>

                    <div class="columns">
                        <ZoomImage
                            src={images.bradbury}
                            alt="Inside of the Bradbury Building" />
                    </div>
                    <p>
                        What was most interesting to me was the feeling of being
                        outside even though we were inside. If it were nighttime
                        and I didn't look towards the ceiling, I could have
                        imagined that I was in the streets and alleys of some
                        Victorian city.
                    </p>
                    <p>
                        It was one thing to use and interact with a program I
                        wrote, but it was a different experience entirely to
                        stand inside and walk through a build like this. A space
                        could be designed not just for practicalities but to
                        cultivate a specific experience. Again, it took both
                        creative design and engineering to get the space to work
                        and get built.
                    </p>
                </div>

                <div>
                    <ScrollAnchor>
                        <h2>Grand Central Market</h2>
                    </ScrollAnchor>
                    <p>
                        With all presentations complete, we returned to Grand
                        Central Market to eat lunch, which contained scores of
                        restaurants. I liked to think I didn't get stuck on
                        small decisions like this, but I remember standing there
                        for at least two or three minutes, my mind running in
                        circles deciding what I should eat.
                    </p>
                    <p>
                        "Having a hard time choosing what to eat?" my teacher
                        asked. I nodded. "We call that the paralysis of choice",
                        he said and smiled knowingly.
                    </p>
                    <p>
                        Eventually I decided to eat from a taco place. They were
                        a bit too spicy for me but otherwise tasted great. The
                        next time we visited, I ate from a sandwich place which
                        had a delicious perfectly crunchy bread.
                    </p>
                    <div class="columns">
                        <ZoomImage
                            src={images.grand_central_market_1}
                            alt="Right outside the Market looking through door" />
                        <ZoomImage
                            src={images.grand_central_market_2}
                            alt="Looking down aisle of food stands" />
                    </div>
                    <p>
                        Eating lunch at Grand Central Market was completely
                        extra&mdash;it had nothing to do with the architecture
                        we were studying and our teacher could just have easily
                        told us to bring lunches or eat school lunches. But he
                        did so for our benefit. The activities we would do in
                        CEA class were not solely for education, on the contrary
                        a lot of care was put into making them fun as well.
                    </p>
                </div>

                <div>
                    <ScrollAnchor>
                        <h2>The Last Bookstore</h2>
                    </ScrollAnchor>
                    <p>
                        Finally, before we headed back to school, we stopped at
                        a bookstore called The Last Bookstore. The first floor
                        was fairly normal, albeit more cozy and with a wider
                        selection than a typical bookstore. However, the second
                        floor was quite whimsical. There was a tunnel of books,
                        a collection of books and other writing implements
                        suspended from wires as if magically animated, a cartoon
                        vault with decorative plastic buzz saws and other
                        security measures, and set of labyrinthine shelves that
                        rejected the notion of an organized grid. It was one
                        last quite creative and remarkable construction for us
                        to see.
                    </p>
                    <div class="columns">
                        <ZoomImage
                            src={images.last_bookstore}
                            alt="Entrance to the bookstore" />
                    </div>
                </div>
            </ScrollContainer>
        </div>

        <div class="map-container">
            <div class="map-container-inner">
                <!--34.05352359399543, -118.24636278711354-->
                <PathMap
                    center={MAP_CENTER}
                    zoom={15}
                    locations={MAP_LOCATIONS}
                    bind:progress
                    disableDefaultUI
                    draggable={false}
                    mapId="MAP"
                    pathColor="#444"
                    currentLocationColor="#5151cf" />
                <StreetviewMap
                    {...location}
                    zoomControl={false}
                    panControl={false}
                    addressControl={false}
                    clickToGo={false} />
            </div>
        </div>
    </div>

    <div class="center-column">
        <h2>Conclusion</h2>
        <p>
            At this point in the quarter, I still had the option to change
            classes to my original engineering course, but the trip had changed
            my mind. I said to one of my friends, "You know, I think I'm going
            to keep this class."
        </p>
        <p>"Yeah, so am I man. It's pretty nice."</p>
        <p>
            And he was correct. This field trip had showed me two lessons. 1)
            There are some really cool and interesting things you can do with
            architecture, and creative projects as a whole, including in tandem
            with technical disciplines. 2) This class was about more than just
            learning architecture. It was about growing together and caring
            about what we make.
        </p>
        <p>
            After the trip, I enjoyed CEA a lot more. Not only was it fun to
            work with my classmates and go on trips like these, but I also came
            to enjoy exercising the creative part of my brain in along with the
            technical. Because I am more comfortable with purely technical and
            digital projects as mentioned earlier, it was more fun short-term to
            focus on those sorts of projects, but I realized that projects with
            more creative depth and physical tangibility like in CEA were more
            fulfilling long-term. It was still a lot of work, as I had a lot to
            learn and undertook some ambitious projects, but because it was
            interesting and fun and fulfilling, I had enough motivation to
            complete them. In fact, the difficulty made the class more
            meaningful, because I had to learn and grow to succeed. This renewed
            passion even spilled over into my English class, and I found new
            motivation and enjoyment in the last two units of English that year
            as well. Through CEA, I found new friends, new ways of seeing and
            thinking, new ways to use my creativity, and new passions.
        </p>
        <p>
            As I reflect on my experiences from high school, I do feel that I've
            stayed in my comfort zone and turned back to technical/digital
            projects a lot since the end of high school. I feel that creative
            and physical projects are still something I want to invest in for my
            long-term fulfillment. This project shall serve as a reminder to my
            present and future self&mdash;don't forget to be creative and build.
        </p>

        <Popup>
            {#snippet button(onclick)}
                <button {onclick}>Craft Statement and Annotated Bibliography</button>
            {/snippet}

            <h2>Craft Statement</h2>

            <p>
                It took me a little while to think of a travel experience I
                wanted to write about. I had been on plenty of vacations, but
                they weren't very personally significant in my memory other than
                spending time with family. In fact, it was hard for me to
                remember details from most of the trips I could think of. After
                thoroughly writing out all my possible travel experiences and
                how I might be able to connect them to travel writing, I decided
                the travel experience that the most growth had come out of was
                my trip to Downtown LA for my high school Civil Engineering and
                Architecture (CEA) class.
            </p>

            <p>
                The central theme is motivation. At the time of the trip, I was
                struggling to find motivation in many of my more difficult
                classes, including CEA, and after that trip, I realized how fun
                and interesting CEA could be. This gave me motivation to work to
                do my best, and although (or perhaps because) it was still a
                high-effort class, I quite enjoyed the class and found it
                fulfilling. CEA taught me the value of caring about my work,
                combining creativity with technical skills, and working with my
                hands and not just my brain.
            </p>

            <p>
                When people read my story, I want it to be an encouragement to
                pursue creative and physical projects, not just technical and
                digital ones. This is the realization I came to throughout CEA
                and that I want to share with the audience. That includes
                present me, as I have not continued these practices of creative
                and physical projects as much as I would have liked to. I also
                want to illustrate how much of a difference it makes to care
                about your work, as I discovered due to this trip. My target
                audience is a novice audience, people who are well versed in
                technical but not creative projects. Since a website can only
                exist digitally, the primary place this text would be advertised
                is through news sites or social media.
            </p>

            <p>
                The text deals with the travel writing conventions of
                self-growth and author subjectivity. The DTLA trip was a turning
                point in my CEA journey, which affected my personal growth as a
                whole. Like Teju Cole, I tried to include a description of what
                happened <em>and</em>
                a personal reflection at each destination, to show the progress towards
                my conclusion. For example, at the Disney Concert Hall, I described
                the architecture and our activities there, then discussed my internal
                reflections on creative and technical skills. I wanted to make sure
                all the parts of my conclusion about creativity and motivation were
                built up throughout the piece, so that the reader can come to the
                conclusion at the same time as I do in the writing. The piece also
                involved author subjectivity, as my memory is not the best and there
                were details I had to make a best guess as to what happened, such
                as the dialogue. Most of the dialogue, including my conversation
                with my teacher at the Grand Central Market and with my friend at
                the end, is somewhat paraphrased, although I transcribed it as best
                as I can remember. I wrote it as dialogue anyway, in order to make
                the experience seem more vivid and in-the-present to the reader.
                Also, I tried to make my reflections and realizations based on real
                memories, but some had to be embellished for the sake of flow. For
                example, I did not have those thoughts from the Disney Concert Hall
                as clearly as I write them down. Much of it was developed and cultivated
                in the class throughout the next few months.
            </p>

            <p>
                The text uses multiple rhetorical methods to persuade the reader
                of my growth and my main message of trying creative activities.
                I show that I have personally been to DTLA and experienced both
                sides of the technical/creative design, which shows that I am
                qualified to discuss both DTLA and creative/technical projects.
                This appeal also falls under <em>ethos</em>, since it concerns
                my credibility. I also included a summary of the history of each
                building to provide the reader with context and a more complete
                understanding of the building I was discussing, as well as to
                prove my credibility to the reader by showing that I have done
                this background research. This is an appeal that falls under
                <em>logos</em>
                and <em>ethos</em>. Finally, I wrote the text in the reflective,
                serious tone of contemporary travel authors to emphasize my
                self-growth on the journey. It shows I am sincere and carefully
                consider what I learned from the experience, and hopefully
                inspires them to value and try out creative projects as well.
                This is an appeal that falls under
                <em>pathos</em>, since the growth I describe is a value and not
                a logical or ethical argument.
            </p>

            <p>
                I made the piece in the form of an interactive website which
                includes text and pictures in a traditional scrolling pane, and
                a map and Google street view. The map shows markers indicating
                the main locations we visited. Scrolling the text/pictures
                advances the map and street view, and clicking the map or moving
                in street view scrolls the content, showing a strong but dynamic
                link between writing/photos and location. This involves
                linguistic, visual, and spatial modes. I included a street view
                component to better engage the audience, as they are actively
                controlling their point of view on the map, and to better
                immerse them in the story, as if they are walking in the streets
                of Downtown LA with me. This is especially fitting for my story
                because a city has many details around every corner to see, and
                unlike nature travel destinations it is well documented by
                Google street view. The website as a whole also serves as an
                example of combining my technical skills with creativity, which
                is one of the topics of my story. Because I made a website
                linked to google street view, I had to figure out the design for
                the website, write the code for layout and interactivity, and
                learn how to use the Google Maps API.
            </p>

            <p>
                Originally, I was going to include more conventions, such as
                travel writers as scientific researchers, disdain for tourists,
                and the subversion of traveling to an urban rather than natural
                location. However, I found these more difficult to integrate
                into the story and relate back to my central message, since the
                focus was on motivation and creativity which are not really
                related to wilderness, tourism, or research. There were also
                some more locations I had photos of, such as the Museum of
                Contemporary Art and The Broad, but I didn't remember any
                details from them and consequently wasn't sure how to integrate
                them into my main point, so they were cut from the final draft.
                Earlier in the revision process I also considered getting
                interviews and photos from my classmates and teacher to bring in
                other voices and not have to rely solely on my memory and
                photos, but because of how much I was planning already I decided
                not to pursue that. While I started out broad, all of these
                changes were made to put more quality and focus on fewer
                elements, rather than covering many areas but only briefly.
            </p>

            <h2>Annotated Bibliography</h2>

            <h3>Genre Model 1: Collier Nogues - "The Perimeter"</h3>
            <p class="citation">
                Nogues, Collier. "The Perimeter." <em>Territory</em>,
                <Link url="themapisnot.com/issue-iv-collier-nogues" />. Accessed
                22 Feb. 2025.
            </p>
            <p>
                Collier Nogues is the Assistant Professor of Creative Writing at
                the Chinese University of Hong Kong. In "The Perimeter" she
                writes about the Kadena Air Base on Okinawa, Japan. She grew up
                there and came back after many years to discuss land politics,
                how it affected the locals, and her own history on the base. She
                uses historical evidence, photos and descriptions of what she
                sees, and conversations with people she interacts with to show
                the harm the base does to the land. I was inspired to use this
                source because the interactive website form is similar to the
                form I want to achieve. The map markers that seamlessly fade
                move in time with the scrolling text and images helps paint a
                more vivid and immersive picture for the reader. I based my
                website interactive design on Nogues' work. For example, I also
                made my project with scrolling text and photos and have an
                overview map, as well as a street view and clickable markers.
            </p>
            <h3>Genre Model 2: Teju Cole - "After Caravaggio"</h3>
            <p class="citation">
                Cole, Teju. "After Caravaggio." <em>Black Paper</em>, The
                University of Chicago Press, 2021, pp. 1-29.
            </p>
            <p>
                Teju Cole is the Gore Vidal professor of the practice of
                creative writing at Harvard and a writer for NY Times Magazine.
                His novels and essays have won numerous awards. In "After
                Caravaggio", Cole describes retracing the journeys of the
                painter Caravaggio. Cole uses vivid visual descriptions of
                Caravaggio's paintings, historical information about his actions
                and travels, and Cole's personal experiences on his own trip to
                show that while Caravaggio was not a great person, his art was
                remarkable for how clear and raw he could depict the human
                condition and suffering. In Cole's personal experience sections
                he describes how he feels sadness and encounters tragedy and
                tension in the places he visits, made more prominent by his
                meditation on Caravaggio's art. Cole's piece is similar to mine
                in that we both traveled to multiple locations (although Cole
                traveled a wider area) to see some form of art (painting and
                architecture respectively) and had some sort of emotional
                reaction from it. Using a similar structure to Cole's writing,
                with clear sections of art description, historical context, and
                personal reflection, helped to emphasize the connections between
                all of these in my writing.
            </p>
            <h3>Genre Model 3: Milo Rossi - "Dark Routes"</h3>
            <p class="citation">
                Rossi, Milo. "Dark Routes Ep. 1: The Ruins of Guadalupe."
                <em>YouTube</em>, uploaded by Miniminuteman, 19 Nov. 2023,
                <Link url="www.youtube.com/watch?v=ghMyjXPWUbs" />. Accessed 22
                Feb. 2025.
            </p>
            <p>
                Milo Rossi is an archaeologist and influencer who makes videos
                and social media content on archaeology, anthropology,
                environmental science, and debunking conspiracy theories. In
                "The Ruins of Guadalupe", he shows how interesting but
                relatively unknown said ruins are, as well as the Chocoan people
                who built them. He supports this with footage of his journey to
                the ruins (which are on the top of a plateau), videos of the
                detailed pottery and impressive buildings, and background
                information on the Chocoans such as how they built a strong road
                network which let them build with wood in woodless places. I
                wanted to use Rossi's work because his trip was undertaken
                entirely out of passion for his study of archaeology and
                historical stories as a whole, which is similar to my increased
                passion for my CEA class after going on the DTLA trip. Rossi
                conveys and shares with the audience his enthusiasm for
                archaeology and history very clearly and this is something I
                wanted to replicate.
            </p>
            <h3>Secondary Source 1: Thompson - <em>Travel Writing</em></h3>
            <p class="citation">
                Thompson, Carl. <em>Travel Writing</em>. 1st ed., Taylor &amp;
                Francis Group, 2011. <em>ProQuest Ebook Central</em>,
                <Link
                    url="ebookcentral.proquest.com/lib/uci/detail.action?docID=692374" />.
            </p>
            <p>
                Carl Thompson is an author, as well as a Reader in English
                Literature at the University of Surrey, and has extensively
                researched and published in the field of travel writing. In
                Travel Writing, he discusses what defines the genre, its
                different forms throughout history (for example ethnographic vs
                autobiographical forms), and ethical concerns (such as
                appropriation and creating a foreign image of other cultures).
                He supports this with travel writing pieces that demonstrate
                these traits, such as William Dampier to show 17th-18th century
                scientific objectivism in travel writing, and Henry Morton
                Stanley to show colonial attitudes towards none-European lands.
                I chose Thompson because he provides extensive background on all
                of the above topics in travel writing. I will use Thompson's
                work to reference how what travel writing conventions there are
                and how they are typically implemented, and decide which
                conventions I want to include and how to implement them in my
                writing.
            </p>
            <h3>Secondary Source 2: "History of Angels Flight&reg;"</h3>
            <p class="citation">
                "History of Angels Flight&reg;." <em
                    >Angels Flight&reg; Railway</em
                >, Angels Flight&reg; Railway Foundation,
                <Link url="www.angelsflight.org/history/" />. Accessed 1 Mar.
                2025.
            </p>
            <p>
                The Angels Flight&reg; Railway Foundation is the current owner
                of Angels Flight&reg; Railway, having taken ownership in 1996.
                "History of Angels Flight&reg;" describes the construction,
                updates, dismantling, reconstruction, and surrounding legal
                processes of Angels Flight&reg; Railway over its lifetime,
                categorized by owner. I chose this source because it was written
                by the official foundation currently managing the railway. I
                used this source to provide background information on Angels
                Flight&reg; Railway while I described my personal experience
                there.
            </p>
            <h3>
                Secondary Source 3: "The Music Center's Walt Disney Concert
                Hall"
            </h3>
            <p class="citation">
                "The Music Center's Walt Disney Concert Hall." <em
                    >The Music Center</em
                >,
                <Link
                    url="www.musiccenter.org/visit-explore/visit-explore/campus/walt-disney-concert-hall/" />.
                Accessed 1 Mar. 2025.
            </p>
            <p>
                The Music Center is one of the largest performing arts center in
                the nation, and the owner of the Walt Disney Concert Hall. "The
                Music Center's Walt Disney Concert Hall" describes the
                construction and design of the concert hall, including how it
                was funded by Lillian Disney in honor of Walt Disney and the
                visual and acoustic design. I chose this source because it was
                written by staff of the arts center owning the concert hall. I
                used this source to provide background information on Walt
                Disney Concert Hall while I described my personal experience
                there.
            </p>
            <h3>
                Secondary Source 4: "Flashback: Caltrans District 7 Headquarters
                / Morphosis Architects"
            </h3>
            <p class="citation">
                "Flashback: Caltrans District 7 Headquarters / Morphosis
                Architects." <em>ArchDaily</em>, 15 Feb. 2012,
                <Link
                    url="www.archdaily.com/206947/flashback-caltrans-district-7-headquarters-morphosis" />.
                Accessed 1 Mar. 2025.
            </p>
            <p>
                The text was written by the architects of Caltrans District 7
                Headquarters. "Flashback: Caltrans District 7 Headquarters /
                Morphosis Architects" describes the appearance and architecture
                of the building, as well as a bit of its construction history. I
                chose this source because it was the same source I used in 11th
                grade when researching it for our field trip. I used this source
                to provide background information on the Caltrans Headquarters
                while I described my personal experience there.
            </p>
            <h3>Secondary Source 5: "About the Bradbury Building"</h3>
            <p class="citation">
                "About the Bradbury Building." <em>Bradbury Building</em>,
                <Link url="thebradburybuilding.com/about/" />. Accessed 1 Mar.
                2025.
            </p>
            <p>
                The article was written by the staff owning the Bradbury
                Building. It describes the history of the building, including
                its conception by Lewis Bradbury and how it was designed by
                draftsman George Wyman. It also describes the building's
                inspiration from an 1887 science fiction novel and its
                architectural features like ornate iron railings. I chose this
                source because it was written by the staff owning the Bradbury
                Building. I used this source to provide background information
                on the Bradbury Building while I described my personal
                experience there.
            </p>
        </Popup>
    </div>
</main>

<SmallScreenNotice />

<style>
    .center-column {
        max-width: 50em;
        padding: 4em;
        margin: auto;
        min-height: 100dvh;
    }

    .scroll-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 2em;
        gap: 2em;
    }

    h2 {
        padding: 8rem 4rem;
        text-align: center;
        margin: 1rem 0;
        border-radius: 1rem;
        background-color: #2f2f3d;
        position: relative;
        font-size: 2.5em;
    }

    h2:first-child {
        margin-top: 0;
    }
    
    h2::before, h2::after, h1::before, h1::after {
        content: '';
        position: absolute;
        box-sizing: border-box;
        border: 1rem solid white;
    }

    h1::before, h1::after {
        width: 9rem;
        height: 9rem;
    }
    
    h2::before, h2::after {
        width: 7rem;
        height: 7rem;
    }

    h2::before, h1::before {
        top: 2rem;
        left: 2rem;
        border-bottom-color: transparent;
        border-right-color: transparent;
    }

    h2::after, h1::after {
        bottom: 2rem;
        right: 2rem;
        border-top-color: transparent;
        border-left-color: transparent;
    }

    .map-container-inner {
        height: 100dvh;
        position: sticky;
        top: 0;
        display: grid;
        grid-template-rows: 2fr 5fr;
        box-sizing: border-box;
        padding: 2em 0;
        gap: 2em;
    }

    .map-container-inner > :global(*) {
        border-radius: 1em;
    }

    .scroll-content {
        padding: 2em 0;
        display: flex;
        flex-direction: column;
        gap: 4em;
    }

    .citation {
        text-indent: 4em hanging;
        text-align: left;
    }

    .columns :global(.zoom-image) {
        width: 100%;
    }

    .columns :global(.zoom-image):only-of-type {
        width: 50%;
    }

    :global(.zoom-image) {
        border-radius: 1em;
    }

    .header {
        background-image: url('./assets/images/general_1.jpg');
        background-size: cover;
        height: 100dvh;
        display: grid;
        align-items: center;
    }

    h1 {
        display: block;
        background-color: #24242ecf;
        color: white;
        backdrop-filter: blur(16px);
        padding: 8rem 2rem;
        border-radius: 2rem;
        margin: 0 4rem;
        text-align: center;
        font-size: 4em;
        text-transform: uppercase;
        font-weight: 500;
    }

    p {
        line-height: 1.8;
        text-align: justify;
        margin: 2em 0;
    }

    h3 {
        margin: 3em 0 1em;
        text-align: center;
    }

    .columns {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: min(1fr, 50%);
        gap: 1em;
        margin: 2em 0;
        justify-items: center;
    }
    
    /*Yes horrible hacks I'm sorry*/
    .columns:last-child {
        margin-bottom: 0;
    }
    
    .scroll-content :global(.document) {
        max-width: 80%;
        margin: 2em auto;
    }
    
    .note {
        font-style: italic;
        text-align: center;
    }
    
    button {
        font-size: 1.5em;
        padding: 2rem;
        background-color: #2f2f3d;
        cursor: pointer;
        transition: 0.25s;
        border-radius: 2rem;
        border: none;
        text-align: center;
        display: block;
        margin: auto;
    }
    
    button:hover {
        filter: brightness(1.2);
    }
    
    button:active {
        filter: none;
    }
</style>
