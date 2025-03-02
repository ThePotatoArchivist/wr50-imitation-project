<script lang="ts">
    import type { LatLngLiteral, StreetViewPov } from './lib/maps'
    import ScrollAnchor from './lib/ScrollAnchor.svelte'
    import ScrollContainer from './lib/ScrollContainer.svelte'
    import SmallScreenNotice from './lib/SmallScreenNotice.svelte'
    import StreetviewMap from './lib/StreetviewMap.svelte'

    const locations: {
        position: LatLngLiteral,
        pov: StreetViewPov,
    }[] = [
        { // Angels Flight
            position: { lat: 34.0511031, lng: -118.249919 },
            pov: { heading: 48.61, pitch: 4.02 },
        },
        { // Walt Disney Concert Hall
            position: { lat:  34.05564381902516, lng: -118.24903963257336 },
            pov: { heading: 252.510, pitch: 14.374 },
        },
        { // Caltrans
            position: { lat: 34.0522954, lng: -118.2434409 },
            pov: { heading: 179.12, pitch: 19.6 },
        },
        { // Bradbury
            // @34.0506715,-118.2476327,3a,90y,219.8h,97.79t
            position: { lat: 34.0506715, lng: -118.2476327 },
            pov: { heading: 219.8, pitch: 7.79 },
        },
        { // Grand Central Market
            position: { lat: 34.0510505, lng: -118.2496353 },
            pov: { heading: 89.33, pitch: 1.95 }
        },
        { // The Last BOokstore
            // @34.0475974,-118.2500109,3a,75y,51.71h,102.33t
            position: { lat: 34.0475974, lng: -118.2500109 },
            pov: { heading: 51.7, pitch: 12.33 }
        }
    ]
    
    let progress: number = $state(0)

    let location = $derived(locations[Math.max(Math.round(progress) - 1, 0)])

</script>

<main>
    <div class="center-column">
        <h2 class="header">Preface</h2>
        <p>
            The first quarter of my 11th grade year was a lot harder than 9th & 10th
            grade had been. In general, I am more comfortable and confident with STEM
            classes, but social studies classes are more difficult for me. In my
            American History class (and English to a lesser degree), we were often
            assigned a lot of reading and writing work. Because I was less proficient,
            I had trouble getting motivated to work on the assignments, which meant it
            often took me a long time to complete it. As a result, I didn't have much
            free time and I often had to stay up as late as 1am. I tried many different
            strategies to handle it, such as going to libraries, eating snacks, and
            getting a standing desk, but it was hard to find anything that consistently
            helped long-term. In fact, this is still something I deal with in general
            today.
        </p>
        <p>
            That year, I also had a Civil Engineering and Architecture (CEA) class. I
            didn't actually plan to take it, I just got switched into it because I had
            a free period. I originally wanted to switch back to my intended
            engineering class. We had to read alot as well as perform the
            artistic/interpretive/non-deterministic sort of work that plagued me in
            History. But my mind began to change with our architecture field trip to
            Downtown Los Angeles.
        </p>
    </div>

    <div class="scroll-container">
        <div class="container">
            <ScrollContainer bind:progress anchor="middle">
                <ScrollAnchor>
                    <h2>Angels Flight</h2>
                </ScrollAnchor>
                <p>
                    One of our first stops was Angel's Flight, a very short train ride up a
                    steep hill. The ride car was shaped like a trapezoid and was stepped on the
                    inside so that the inside was upright despite the angle. When I think back
                    I imagine an incline of 45°, though in reality it is closer to 30°.
                </p>
                <p>
                    The ride cost $1, but when I checked my wallet I realized: "Wait, I don't
                    think I have any singles". Before I even had time to process the situation
                    I was in, another student said to me, "I can lend you a dollar". I was
                    surprised -- I still didn't know most of my classmates very well, I
                    probably had never spoken to this classmate before, and yet he was willing
                    to help me out. "Oh- thank you!" I said. We then boarded the train to
                    ascend the hill.
                </p>
                
                <ScrollAnchor>
                    <h2>Walt Disney Concert Hall</h2>
                </ScrollAnchor>
                <p>
                    The third stop on our field trip was the Walt Disney Concert Hall. It was
                    an incredible sight: massive flowing metal curves at all sorts of twisting
                    angles, creating a silhouette somewhat resembling a chaotic version of the
                    Sydney opera house. Prior to the trip we had been split into teams to
                    research the structures we would visit. The team presenting on the concert
                    hall mentioned the architect had designed it to look like sails blowing in
                    the wind, and it was made of hundreds or thousands of custom shaped metal
                    panels. It hardly looked like a building, more like an enormous sculpture.
                </p>
                <p>
                    We took a group picture, then went around the back and found a nice garden
                    with a multilayered rose-shaped fountain and a pretty view of more of the
                    city.
                </p>
                <p>
                    The buildings prior had been interesting, sure, but the Concert Hall blew
                    me away. I had never thought too much about building aesthetics before this
                    class. Here was something probably hundreds of people put extra work into
                    making look good, requiring both creativity to design and engineering to
                    execute it.
                </p>
                <p>
                    I think for a large portion of my life I tended to draw a divide between
                    technical skills and projects, which I was good at it, and creative
                    projects, which I wasn't good at. But the two are not mutually exclusive.
                    Even the graphing calculator and website projects I'd made in the past
                    required a mixture: Creativity to think up these ideas and designs, and
                    technical knowledge to execute it. Seeing these buildings, and especially
                    the concert hall, made it clear to me that I didn't have to pigeonhole
                    myself into purely technical projects.
                </p>
                <ScrollAnchor>
                    <h2>Caltrans District 7 Headquarters</h2>
                </ScrollAnchor>
                <p>
                    The next stop was CalTrans District 7 Headquarters. It was all grey, but
                    like the Disney Concert Hall it made up for its lack of color with its
                    shape. Some sides were mostly smooth, made up of panels spanning slight
                    angles and ridges. Some panels were raised, probably connected to windows.
                    Other sides were more textured, with overlapping horizontal pipe
                    structures.
                </p>
                <p>
                    My team was assigned to this building. I was a bit nervous about my part of
                    the presentation, but my school gives us a lot of presenting experience and
                    I actually knew what I was talking about unlike the last presentation for
                    the class, so I did fine. I talked about how the building was designed with
                    panels that would open and close in response to time of day and humidity,
                    as well as the light installation title "Motordom" designed to evoke cars
                    rushing by on a freeway.
                </p>
                <p>
                    After our team finished presenting, I realized that I had actually been
                    excited to present the information I knew, unlike most of the other times I
                    had presented for school. I was learning to care about the work we did in
                    this class, and caring means I'm motivated to put in the work to create a
                    higher quality output.
                </p>

                <ScrollAnchor>
                    <h2>Bradbury Building</h2>
                </ScrollAnchor>

                <p>
                    The last building on our itinerary was the Bradbury Building. Inside, the
                    walls were made out of orange brick, the floor was tile, and the pillars
                    and fences were ornate black metal. The team presenting on this building
                    mentioned that there were pneumatic tubes and chutes used to shoot mail
                    around the building.
                </p>
                
                <p>
                    What was most interesting to me was the feeling of being outside even
                    though we were inside. If it were nighttime and I didn't look towards the
                    ceiling, I could have imagined that I was in the streets and alleys of some
                    Victorian city.
                </p>
                
                <p>
                    It was one thing to use and interact with a program I wrote, but it was a
                    different experience entirely to stand inside and walk through a build like
                    this. A space could be designed not just for practicalities but to
                    cultivate a specific experience. Again, it took both creative design and
                    engineering to get the space to work and get built.
                </p>                

                <ScrollAnchor>
                    <h2>Grand Central Market</h2>
                </ScrollAnchor>

                <p>
                    With all presentations complete, we returned to Grand Central Market to eat
                    lunch, which contained scores of restaurants. I liked to think I didn't get
                    stuck on small decisions like this, but I remember standing there for at
                    least two or three minutes, my mind running in circles deciding what I
                    should eat.
                </p>

                <p>
                    "Having a hard time choosing what to eat?" my teacher asked. I nodded. "We
                    call that the paralysis of choice", he said and smiled knowingly.
                </p>

                <p>
                    Eventually I decided to eat from a taco place. They were a bit too spicy
                    for me but otherwise tasted great. The next time we visited, I ate from a
                        sandwich place which had a delicious perfectly crunchy-and-moist bread.
                </p>

                <p>
                    Eating lunch at Grand Central Market was completely extra -- it had nothing
                    to do with the architecture we were studying and our teacher could just
                    have easily told us to bring lunches or eat school lunches. But he did so
                    for our benefit. The activities we would do in CEA class were not solely
                        for education, on the contrary a lot of care was put into making them
                            fun as well.
                </p>

                <ScrollAnchor>
                    <h2>The Last Bookstore</h2>
                </ScrollAnchor>

                <p>
                    Finally, before we headed back to school, we stopped at a bookstore called
                    The Last Bookstore. The first floor was fairly normal, albeit more cozy and
                    with a wider selection than a typical bookstore. However, the second floor
                    was quite whimsical. There was a tunnel of books, a collection of books and
                    other writing implements suspended from wires as if magically animated, a
                    cartoon vault with decorative plastic buzz saws and other security
                    measures, and set of labyrinthine shelves that rejected the notion of an
                    organized grid. It was one last quite creative and remarkable construction
                    for us to see.
                </p>
            </ScrollContainer>
        </div>

        <div class="map-container">
            <div class="map-container-inner">
                <StreetviewMap {...location} zoomControl={false} panControl={false} addressControl={false} clickToGo={false} />
            </div>
        </div>
    </div>

    <div class="center-column">
        <h2>Conclusion</h2>
        <p>
            At this point in the quarter, I still had the option to change classes to
            my original engineering course, but the trip had changed my mind. I said to
            one of my friends, "You know, I think I'm going to keep this class."
        </p>
        <p>"Yeah, so am I man. It's pretty nice."</p>
        <p>
            And he was correct. This field trip had showed me two lessons. 1) There are
            somre really cool and interesting things you can do with architecture, and
            creative projects as a whole, including in tandem with technical
            discliplines. 2) this class was about more than just learning architecture.
            It was about growing together and caring about what we make.
        </p>
        <p>
            After the trip, I enjoyed CEA a lot more. Not only was it fun to work with
            my classmates and go on trips like these, but I also came to enjoy
            exercising the creative part of my brain in along with the technical.
            Because I am more comfortable with purely technical and digital projects as
            mentioned earlier, it was more fun short-term to focus on those sorts of
            projects, but I realized that projects with more creative depth and
            physical tangibility like in CEA were more fulfilling long-term. It was
            still a lot of work, as I had a lot to learn and undertook some ambitious
            projects, but because it was interesting and fun and fulfilling, I had
            enough motivation to complete them. This renewed passion even spilled over
            into my English class, and I found new motivation and enjoyment in the last
            two units of English that year as well. Through CEA, I found new friends,
            new ways of seeing and thinking, new ways to use my creativity, and new
            passions.
        </p>
        <p>
            As I reflect on my experiences from high school, I do feel that I've stayed
            in my comfort zone and turned back to technical/digital projects a lot
            since the end of high school. I feel that creative and physical projects
            are still something I want to invest in for my long-term fulfillment. This
            project shall serve as a reminder to my present and future self - don't
            forget to be creative and build.
        </p>        
    </div>
</main>

<SmallScreenNotice />

<style>
    .center-column {
        width: 50%;
        margin: auto;
        min-height: 100dvh;
    }

    .scroll-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    h2 {
        padding: 8em 0;
        text-align: center;
        margin: 4em 0 1em;
        border: 0.5em white solid;
    }

    .map-container-inner {
        height: 100dvh;
        position: sticky;
        top: 0;
        display: grid;
    }

    .container {
        padding: 2em;
    }
</style>
