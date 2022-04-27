//Your Code here

let firstAnswer = window.prompt('Do you head left or right? "Left" or "Right"')
if (firstAnswer === 'Left') {

    let secondAnswer = window.prompt(`You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path? "Follow" or "Continue"`) // Left prompt
    if (secondAnswer === 'Follow') {

        let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. "Stay" or "Spread the word"`) // Follow Prompt

        if (thirdAnswer === 'Stay') {
            window.alert(`You live happily amongst the cats for the rest of your days.`) // Stay Prompt
        }
        else if (thirdAnswer === 'Spread the word') {
            window.alert(`After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.`)    // Spread Prompt
        }
    }

    else if (secondAnswer === 'Continue') {

        let thirdAnswer = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?') // Continue Prompt

        if (thirdAnswer === 'Ladder') {
            window.alert(`After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.`) // Ladder Prompt
        }
        else if (thirdAnswer === 'Staircase') {
            window.alert(`After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.`) // Staircase Prompt
        }
    }

}
else if (firstAnswer === 'Right') {

    let secondAnswer = window.prompt(`You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take? "Past the dragon" or "Away from the dragon"`) // Right Prompt

    if (secondAnswer === 'Past the dragon') {

        let thirdAnswer = window.prompt(`The dragon wakes up and sits upright. You only have a moment to respond, to stay or run? "Stay" or "Run"`) // Past dragopn Prompt

        if (thirdAnswer === 'Stay') {
            window.alert(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.
                `) // Stay Prompt
        }
        else if (thirdAnswer === 'Run') {
            window.alert(`Quickly, you run back to the cave's entrance. Sheepish, you return home.
                `)    // Run Prompt
        }
    }

    else if (secondAnswer === 'Away from the dragon') {

        let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do? "Draw it" or "Pick it"') // Away Dragon Prompt

        if (thirdAnswer === 'Draw it') {
            window.alert(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.`) // Draw Prompt
        }
        else if (thirdAnswer === 'Pick it') {
            window.alert(`You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`) // Pick Prompt
        }
    }
}