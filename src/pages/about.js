import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <Header headerText="Ok, it's pretty cool, as you say." />
      <Header headerText="Morton! " headerSubText="Your Are Experimenting again" />
      <p>Such wow. Very React.</p>
    </div>
  )
}