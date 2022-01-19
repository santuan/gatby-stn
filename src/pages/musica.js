import React from "react"
// import { Link } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { RiSoundcloudLine } from "react-icons/ri"

const MusicaPage = () => {
  return (
    <Layout>
      <Seo title="Música" pathname={`/musica/`} />
      <div className="relative min-h-screen px-6 py-6 mx-auto mt-24 max-w-7xl">
        <h1 className="mb-12 font-serif text-6xl text-center text-white ">Audio</h1>
        <div className="absolute top-0 hidden left-9 ">
          <RiSoundcloudLine className="text-6xl text-white transform scale-150" />
        </div>

        <div className="relative z-20 grid gap-12 mx-auto my-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          <div>
            <iframe
              width="100%"
              height="220"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="Open again"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1138091848&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
          <div>
            <iframe
              width="100%"
              height="220"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="Open again"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1084555480&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
          <div>
            <iframe
              width="100%"
              height="220"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="Open again"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1073010718&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>

          <div>
            <iframe
              width="100%"
              height="220"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="Open again"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1071561481&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
          <div>
            <iframe
              width="100%"
              height="220"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="Open again"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1062721918&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>

          <div>
            <iframe
              width="100%"
              height="220"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="Open again"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000371097&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
          <div>
            <iframe
              width="100%"
              height="220"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="Open again"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/982925068&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>

          <div>
            <iframe
              width="100%"
              height="220"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="Open again"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/981687943&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
          <div>
            <iframe
              width="100%"
              height="220"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="Open again"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/959867671&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed z-0 opacity-10 md:opacity-10 backgroundVideo"
          poster="https://res.cloudinary.com/srcouto/video/upload/v1628557649/encoder/sunset0001-0120_osaihl.jpg"
        >
          <source
            src="https://res.cloudinary.com/srcouto/video/upload/v1628557649/encoder/sunset0001-0120_osaihl.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/srcouto/video/upload/v1628557649/encoder/sunset0001-0120_osaihl.webm"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/srcouto/video/upload/v1628557649/encoder/sunset0001-0120_osaihl.ogv"
            type="video/ogg"
          />
        </video>
      </div>
    </Layout>
  )
}

export default MusicaPage
