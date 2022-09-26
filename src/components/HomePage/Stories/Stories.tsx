import * as React from "react"
import { animated, useSpring } from "react-spring"
import { useScroll } from "@use-gesture/react"
import "./styles.scss"
import UserInformation, { PlusIconForAddingStory } from "./UserInformation"
import { Box } from "@mui/system"

const clamp = (value: number, clampAt: number = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value
  } else {
    return value < -clampAt ? -clampAt : value
  }
}

const movies = [
  "images/stories/breaking-bad.webp",
  "images/stories/the-leftovers.jpg",
  "images/stories/game-of-thrones.jpg",
  "images/stories/true-detective.jpg",
  "images/stories/walking-dead.jpg",
  "images/stories/breaking-bad.webp",
  "images/stories/the-leftovers.jpg",
  "images/stories/game-of-thrones.jpg",
  "images/stories/true-detective.jpg",
  "images/stories/walking-dead.jpg",
]

const Stories = () => {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }))

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    })
  })

  return (
    <>
      <Box sx={{ pb: 2 }}>
        <div className="container" {...bind()}>
          <animated.div
            className="card"
            style={{
              ...style,
              backgroundImage: "url(/images/stories/grey.jpg)",
            }}
          >
            <PlusIconForAddingStory />
          </animated.div>
          {movies.map((src, index) => (
            <animated.div
              key={index}
              className="card"
              style={{
                ...style,
                backgroundImage: `url(${src})`,
              }}
            >
              <UserInformation />
            </animated.div>
          ))}
        </div>
      </Box>
    </>
  )
}

export default Stories
