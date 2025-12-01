// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

// Called when answering question about whether NHS number is known
router.post("/magical-powers-answers", (req, res) => {
  // Make a variable and give it the value from 'nhsNumberKnown'
  const magicTricks = req.session.data.magicTricks

  // Check whether the variable matches a condition
  if (magicTricks === "I sawed my neighbour in half") {
    // Send user to a page where they'll enter their NHS number
    res.redirect("/symptoms")
  } else if (magicTricks === "I levitated my granny") {
    // Send user to a page where they can find their NHS number
    res.redirect("/symptoms")
  } else if (magicTricks === "I disappeared the cat") {
    // Send user to a page where they can find their NHS number
    res.redirect("/symptoms")
  } else if (magicTricks === "I haven't done anything yet") {
    // Send user to a page where they can find their NHS number
    res.redirect("/ineligible")
  } else {
    // Send user back to the question page
    res.redirect("/magical-powers")
  }
})

module.exports = router
