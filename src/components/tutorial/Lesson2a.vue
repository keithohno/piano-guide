<template>
  <div class="lesson-container">
    <p>
      In the previous section, you learned the letter names for each of the
      white keys on a piano. To extend this system of lettered notes, we have
      <strong>sharps</strong> (#) and <strong>flats</strong> (♭), which raise
      (rightward shift) and lower (leftward shift) each note by one half step.
      This allows us to name all of the black keys of the piano. All these are
      listed below:
    </p>
    <p>
      Note: Black keys can be labeled with a '#', indicating which note they are
      to the right of, or '♭', indicating which note they are to the left of.
      for example, C# and D♭ both used to refer to the same note. This means
      every black key has two different names!
    </p>
    <Piano
      :octaves="1"
      :interactive="false"
      :labeled="true"
      :music_data="chromatic_data"
    />
    <p>
      Now that you know about sharps and flats, we can begin to play songs in
      different keys scales. Recall (from lesson 1a) that scales follow a 'whole
      whole half whole whole whole half' step pattern of notes. This pattern
      remains constant regardless of the starting note, and as a result, all
      scales preserve the same general sound.
    </p>
    <p>
      In the same way, the <strong>key</strong> of a piece (not to be confused
      with the physical keys of a piano) is the 'orientation' of its melody
      around a base note. Changing the key of a song will change the notes it
      uses, but the relative distances between each note will remain the same.
      As a result, the inherent melody will remain unchanged.
    </p>
    <p>
      Try changing the key of Twinkle twinkle little star and below: !try me!
      Twinkle twinkle star in different keys
    </p>
    <Piano
      :octaves="2"
      :scale_locked="true"
      :interactive="true"
      :labeled="true"
      :max_interactive="12"
      :music_data="twinkle_short"
    />
    <p>The key of a piece has a couple practical implications:</p>
    <p>
      Scales and Keys: Most simple melodies use notes that are within a scale,
      and this scale corresponds to the key of the song. For example, Twinkle
      Twinkle Little Star played in the key of D will use the notes: D, E, F#,
      G, A, B; while the notes used in the D major scale are: D, E, F#, G, A, B,
      C#. Once you know the key of the song, you can use this trick to quickly
      determine the main set of notes used in its melody.
    </p>
    <p>
      Resting notes: In general, the key of a piece is the same as it's resting
      note -- the tone at which the melody feels complete. This resting note is
      often the final note of the song, which is a very a useful tool for trying
      to determine the key of a piece. If you don't want to wait til the end of
      the song to find its key, try and isolate sections of the melody that
      create the same feeling of completion; these melodic fragments will
      usually also end on the key of the piece.
    </p>
    <p>
      Note: when we refer to a song as being in a key, say the key of E, it
      doesn't matter which 'E' we're talking about. Recall that the E's on a
      piano are spaced apart at distances of one octave, and so the key of E
      really means that <em>any E</em> is a resting note for the piece.
    </p>
  </div>
</template>

<script>
import Piano from "../piano/Piano.vue";
import chromatic from "./music/chromatic_data.js";
import twinkle_short from "./music/twinkle_short.js";

export default {
  name: "Lesson1b",
  components: {
    Piano,
  },
  data: function () {
    return {
      chromatic_data: chromatic.data,
      twinkle_short: twinkle_short.data,
    };
  },
};
</script>