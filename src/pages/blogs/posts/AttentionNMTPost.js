import React from "react";
import "./AttentionNMTPost.css";

function AttentionNMTPost({ theme }) {
  function heatColor(w) {
    var g = Math.round(255 - (255 - 112) * w);
    var b = Math.round(255 - (255 - 85) * w);
    return "rgb(255," + g + "," + b + ")";
  }

  var heatmapData = {
    source: ["the", "cat", "sat", "on", "the", "mat"],
    target: ["le", "chat", "assis", "sur", "le", "tapis"],
    weights: [
      [0.85, 0.05, 0.02, 0.02, 0.04, 0.02],
      [0.04, 0.82, 0.04, 0.03, 0.04, 0.03],
      [0.02, 0.05, 0.80, 0.06, 0.03, 0.04],
      [0.03, 0.03, 0.06, 0.78, 0.05, 0.05],
      [0.04, 0.03, 0.02, 0.04, 0.83, 0.04],
      [0.02, 0.02, 0.04, 0.04, 0.04, 0.84],
    ],
  };

  return (
    <div className="nmt-article">
      {/* ============ INTRODUCTION ============ */}
      <section className="nmt-section">
        <p className="nmt-p">
          Have you ever used Google Translate to convert a sentence from English
          to French or Hindi? Behind that simple text box lies one of the hardest
          problems in artificial intelligence:{" "}
          <strong>making computers understand and translate human languages</strong>.
        </p>
        <p className="nmt-p">
          In 2015, a team of researchers at Stanford University &mdash;
          Minh-Thang Luong, Hieu Pham, and Christopher D. Manning &mdash;
          published a groundbreaking paper that dramatically improved how neural
          networks translate languages. Their secret weapon? Teaching the model
          to <strong>pay attention</strong>.
        </p>
        <p className="nmt-p">
          This blog breaks down their paper,{" "}
          <em>
            &ldquo;Effective Approaches to Attention-based Neural Machine
            Translation&rdquo;
          </em>
          , in simple English with visuals and math that anyone can follow.
        </p>
      </section>

      {/* ============ SECTION 1: WHAT IS NMT? ============ */}
      <section className="nmt-section">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          What is Neural Machine Translation?
        </h2>
        <p className="nmt-p">
          <strong>Machine Translation (MT)</strong> means using a computer to
          automatically convert text from one language (say English) to another
          (say German or French). Over the decades, this field went through three
          big stages:
        </p>

        <div className="nmt-timeline">
          <div className="nmt-timeline-item">
            <div className="nmt-timeline-year">1950s &ndash; 1990s: Rule-Based</div>
            <div className="nmt-timeline-text">
              Linguists wrote thousands of grammar rules by hand for each
              language pair. It was slow and broke easily on unusual sentences.
            </div>
          </div>
          <div className="nmt-timeline-item">
            <div className="nmt-timeline-year">1990s &ndash; 2013: Statistical</div>
            <div className="nmt-timeline-text">
              Computers learned patterns from millions of translated sentence
              pairs. Better than rules, but still needed hand-designed features
              and struggled with long sentences.
            </div>
          </div>
          <div className="nmt-timeline-item">
            <div className="nmt-timeline-year">2014 &ndash; Present: Neural</div>
            <div className="nmt-timeline-text">
              Deep learning models learn everything end-to-end. No hand-crafted
              rules needed. Just show the model examples of translated sentences,
              and it figures out the patterns by itself.
            </div>
          </div>
        </div>

        <p className="nmt-p">
          Neural Machine Translation (NMT) uses an architecture called the{" "}
          <strong>Encoder-Decoder</strong> model (also known as
          Sequence-to-Sequence or Seq2Seq). Let us understand how it works.
        </p>
      </section>

      {/* ============ SECTION 2: ENCODER-DECODER ============ */}
      <section className="nmt-section">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          The Encoder-Decoder Model
        </h2>
        <p className="nmt-p">
          The core idea is beautifully simple. Split the translation into two
          parts:
        </p>
        <ul className="nmt-list">
          <li>
            <strong>Encoder:</strong> Reads the input sentence word by word and
            builds an &ldquo;understanding&rdquo; of the whole sentence. It
            packs all this understanding into a single vector (a list of
            numbers) called the <strong>context vector</strong>.
          </li>
          <li>
            <strong>Decoder:</strong> Takes that context vector and generates the
            translated sentence one word at a time.
          </li>
        </ul>

        {/* DIAGRAM: Seq2Seq Architecture */}
        <div className="nmt-figure">
          <div className="nmt-dia-container">
            <div className="nmt-dia-section">
              <div className="nmt-dia-label">Encoder</div>
              <div className="nmt-dia-row">
                <div className="nmt-dia-unit">
                  <div className="nmt-dia-cell encoder">
                    h<sub>1</sub>
                  </div>
                  <div className="nmt-dia-word">&ldquo;I&rdquo;</div>
                </div>
                <div className="nmt-dia-arrow">&rarr;</div>
                <div className="nmt-dia-unit">
                  <div className="nmt-dia-cell encoder">
                    h<sub>2</sub>
                  </div>
                  <div className="nmt-dia-word">&ldquo;love&rdquo;</div>
                </div>
                <div className="nmt-dia-arrow">&rarr;</div>
                <div className="nmt-dia-unit">
                  <div className="nmt-dia-cell encoder">
                    h<sub>3</sub>
                  </div>
                  <div className="nmt-dia-word">&ldquo;cats&rdquo;</div>
                </div>
              </div>
            </div>

            <div className="nmt-dia-big-arrow">&rArr;</div>

            <div className="nmt-dia-unit">
              <div className="nmt-dia-cell context">c</div>
              <div className="nmt-dia-word">Context</div>
            </div>

            <div className="nmt-dia-big-arrow">&rArr;</div>

            <div className="nmt-dia-section">
              <div className="nmt-dia-label">Decoder</div>
              <div className="nmt-dia-row">
                <div className="nmt-dia-unit">
                  <div className="nmt-dia-cell decoder">
                    s<sub>1</sub>
                  </div>
                  <div className="nmt-dia-word">&ldquo;J&apos;aime&rdquo;</div>
                </div>
                <div className="nmt-dia-arrow">&rarr;</div>
                <div className="nmt-dia-unit">
                  <div className="nmt-dia-cell decoder">
                    s<sub>2</sub>
                  </div>
                  <div className="nmt-dia-word">&ldquo;les&rdquo;</div>
                </div>
                <div className="nmt-dia-arrow">&rarr;</div>
                <div className="nmt-dia-unit">
                  <div className="nmt-dia-cell decoder">
                    s<sub>3</sub>
                  </div>
                  <div className="nmt-dia-word">&ldquo;chats&rdquo;</div>
                </div>
              </div>
            </div>
          </div>
          <div className="nmt-figure-caption">
            Figure 1: The Encoder reads the input sentence and compresses it into
            a single context vector (c). The Decoder then generates the
            translation word by word.
          </div>
        </div>

        <div className="nmt-info-box">
          <div className="nmt-info-box-title">
            &#128161; Think of it like this
          </div>
          <p className="nmt-p" style={{ marginBottom: 0 }}>
            Imagine reading an entire paragraph in English, then closing the book
            and writing the French translation purely from memory. The Encoder is
            you reading. The context vector is your memory. The Decoder is you
            writing the translation.
          </p>
        </div>
      </section>

      {/* ============ SECTION 3: BOTTLENECK ============ */}
      <section className="nmt-section">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          The Bottleneck Problem
        </h2>
        <p className="nmt-p">
          This simple approach works&hellip; but it has a big weakness. The
          entire meaning of the source sentence &mdash; no matter how long it is
          &mdash; must be compressed into a{" "}
          <strong>single fixed-size vector</strong>.
        </p>
        <p className="nmt-p">
          For short sentences like &ldquo;I love cats,&rdquo; three words of
          meaning can fit comfortably. But what about a sentence with 30 or 50
          words? Squeezing all that information into the same small vector means
          important details get lost.
        </p>

        {/* DIAGRAM: Bottleneck */}
        <div className="nmt-figure">
          <div className="nmt-bottleneck-diagram">
            <div className="nmt-bottleneck-left">
              <div className="nmt-bottleneck-word">word&#8321;</div>
              <div className="nmt-bottleneck-word">word&#8322;</div>
              <div className="nmt-bottleneck-word">word&#8323;</div>
              <div className="nmt-bottleneck-word">word&#8324;</div>
              <div className="nmt-bottleneck-word nmt-bottleneck-dots">
                &#8942;
              </div>
              <div className="nmt-bottleneck-word">word&#8325;&#8320;</div>
            </div>
            <div className="nmt-bottleneck-funnel">
              <div className="nmt-bottleneck-arrow-set">
                <span>&rarr;</span>
                <span>&rarr;</span>
                <span>&rarr;</span>
              </div>
              <div className="nmt-bottleneck-narrow">
                <span>c</span>
              </div>
              <div className="nmt-bottleneck-arrow-out">&rArr;</div>
            </div>
            <div className="nmt-bottleneck-right">
              <div className="nmt-bottleneck-output">Decoder</div>
            </div>
          </div>
          <div className="nmt-figure-caption">
            Figure 2: The Bottleneck &mdash; All information from a long sentence
            must squeeze through a single context vector, causing information
            loss.
          </div>
        </div>

        <div className="nmt-info-box">
          <div className="nmt-info-box-title">
            &#128221; Real-World Analogy
          </div>
          <p className="nmt-p" style={{ marginBottom: 0 }}>
            Imagine you just read a 10-page essay and must now summarize ALL of
            it on one small sticky note. Then someone else has to reconstruct the
            entire essay from just that sticky note. Clearly, a lot of
            information will be lost!
          </p>
        </div>
      </section>

      {/* ============ SECTION 4: THE ATTENTION IDEA ============ */}
      <section className="nmt-section">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          The Big Idea: Attention
        </h2>
        <p className="nmt-p">
          What if, instead of relying on that single compressed vector, the
          decoder could{" "}
          <strong>look back at the FULL input sentence</strong> at each step?
          What if it could decide which parts of the input are most important
          RIGHT NOW for generating the current output word?
        </p>
        <p className="nmt-p">
          That is exactly what <strong>attention</strong> does. When the decoder
          is generating each output word, it follows these steps:
        </p>

        <ol className="nmt-steps">
          <li className="nmt-step">
            <span className="nmt-step-text">
              Looks at ALL the encoder hidden states (one for each input word)
            </span>
          </li>
          <li className="nmt-step">
            <span className="nmt-step-text">
              Computes a &ldquo;relevance score&rdquo; for each &mdash; how
              important is this input word right now?
            </span>
          </li>
          <li className="nmt-step">
            <span className="nmt-step-text">
              Converts these scores into weights (probabilities that add up to 1)
            </span>
          </li>
          <li className="nmt-step">
            <span className="nmt-step-text">
              Creates a focused summary by taking a weighted average &mdash; the
              &ldquo;context vector&rdquo;
            </span>
          </li>
          <li className="nmt-step">
            <span className="nmt-step-text">
              Combines this context with the decoder&apos;s own state to produce
              the output word
            </span>
          </li>
        </ol>

        <div className="nmt-info-box">
          <div className="nmt-info-box-title">
            &#128161; Think of it like this
          </div>
          <p className="nmt-p" style={{ marginBottom: 0 }}>
            <strong>Without attention</strong> = closed-book exam (you must
            remember everything from memory).
            <br />
            <strong>With attention</strong> = open-book exam (you can look back
            at your notes anytime!).
            <br />
            The student (decoder) can refer back to the textbook (encoder states)
            while writing each answer (output word).
          </p>
        </div>
      </section>

      {/* ============ SECTION 5: THE MATH ============ */}
      <section className="nmt-section">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          The Math Behind Attention
        </h2>
        <p className="nmt-p">
          Do not worry if math is not your favorite subject! We will go through
          each equation step-by-step with plain English explanations.
        </p>

        <h3 className="nmt-h3">Step 1: Compute Scores</h3>
        <p className="nmt-p">
          For each source word at position <em>s</em>, we compute a score that
          tells us how relevant that word is to the output word being generated:
        </p>
        <div className="nmt-math-block">
          <div className="nmt-math-label">Score Function</div>
          <div className="nmt-math-expr">
            score( h<sub>t</sub> , h&#772;<sub>s</sub> )
          </div>
        </div>
        <p className="nmt-p">
          Here, <strong>h<sub>t</sub></strong> is the decoder&apos;s current
          hidden state (what it is &ldquo;thinking&rdquo; right now), and{" "}
          <strong>h&#772;<sub>s</sub></strong> is the encoder&apos;s hidden
          state for the input word at position <em>s</em>.
        </p>

        <h3 className="nmt-h3">Step 2: Convert Scores to Weights</h3>
        <p className="nmt-p">
          We use the <strong>softmax</strong> function to turn raw scores into
          probabilities. This ensures all weights are positive and sum to 1:
        </p>
        <div className="nmt-math-block">
          <div className="nmt-math-label">Alignment Weights</div>
          <div className="nmt-math-expr">
            &#945;<sub>t</sub>(s) = exp( score ) / &#8721;<sub>s&prime;</sub>{" "}
            exp( score<sub>s&prime;</sub> )
          </div>
        </div>
        <p className="nmt-p">
          The symbol <strong>&#945;</strong> (alpha) represents the attention
          weight. A higher &#945; means &ldquo;pay more attention to this input
          word.&rdquo; For example, if &#945;<sub>t</sub>(3) = 0.8, the decoder
          is paying 80% of its attention to the 3rd source word.
        </p>

        <h3 className="nmt-h3">Step 3: Compute Context Vector</h3>
        <p className="nmt-p">
          Multiply each encoder hidden state by its attention weight and add them
          all up:
        </p>
        <div className="nmt-math-block">
          <div className="nmt-math-label">Context Vector</div>
          <div className="nmt-math-expr">
            c<sub>t</sub> = &#8721;<sub>s</sub> &#945;<sub>t</sub>(s) &middot;
            h&#772;<sub>s</sub>
          </div>
        </div>
        <p className="nmt-p">
          This gives us a &ldquo;smart summary&rdquo; of the input &mdash; not a
          fixed summary like before, but one that <em>changes</em> depending on
          which output word we are currently generating.
        </p>

        <h3 className="nmt-h3">Step 4: Produce the Output</h3>
        <p className="nmt-p">
          Finally, combine the context vector with the decoder&apos;s hidden
          state:
        </p>
        <div className="nmt-math-block">
          <div className="nmt-math-label">Attentional Hidden State</div>
          <div className="nmt-math-expr">
            h&#771;<sub>t</sub> = tanh( W<sub>c</sub> &middot; [ c<sub>t</sub>{" "}
            ; h<sub>t</sub> ] )
          </div>
        </div>
        <p className="nmt-p">
          The <strong>[ c<sub>t</sub> ; h<sub>t</sub> ]</strong> notation means
          we concatenate (join) the context vector and decoder state together,
          then pass them through a learned transformation. The{" "}
          <strong>tanh</strong> function squashes the output into the range [-1,
          1]. This final vector h&#771;<sub>t</sub> is then used to predict the
          next output word.
        </p>
      </section>

      {/* ============ SECTION 6: ATTENTION HEATMAP ============ */}
      <section className="nmt-section">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          Seeing Attention in Action
        </h2>
        <p className="nmt-p">
          Let us visualize how attention works when translating &ldquo;the cat
          sat on the mat&rdquo; from English to French. The heatmap below shows
          what the decoder focuses on when generating each French word:
        </p>

        <div className="nmt-figure">
          <div className="nmt-heatmap">
            <div className="nmt-heatmap-row">
              <div className="nmt-heatmap-label"></div>
              {heatmapData.source.map(function (word, i) {
                return (
                  <div key={i} className="nmt-heatmap-header">
                    {word}
                  </div>
                );
              })}
            </div>
            {heatmapData.target.map(function (targetWord, i) {
              return (
                <div key={i} className="nmt-heatmap-row">
                  <div className="nmt-heatmap-label">{targetWord}</div>
                  {heatmapData.weights[i].map(function (w, j) {
                    return (
                      <div
                        key={j}
                        className="nmt-heatmap-cell"
                        style={{
                          background: heatColor(w),
                          color: w > 0.5 ? "white" : "#333",
                        }}
                      >
                        {w.toFixed(2)}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="nmt-figure-caption">
            Figure 3: Attention Heatmap &mdash; Darker coral cells mean higher
            attention weight. Notice the near-diagonal pattern: &ldquo;le&rdquo;
            aligns with &ldquo;the,&rdquo; &ldquo;chat&rdquo; with
            &ldquo;cat,&rdquo; and so on.
          </div>
        </div>

        <p className="nmt-p">
          See how attention automatically learned the word alignment between
          languages! When generating the French word &ldquo;chat&rdquo; (cat),
          the model pays <strong>82% attention</strong> to the English word
          &ldquo;cat&rdquo; and very little to the other words. This is exactly
          what a human translator would do.
        </p>
      </section>

      {/* ============ SECTION 7: GLOBAL VS LOCAL ============ */}
      <section className="nmt-section">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          Two Types of Attention: Global vs. Local
        </h2>
        <p className="nmt-p">
          The paper&apos;s most important contribution is introducing{" "}
          <strong>two different approaches</strong> to attention. Let us compare
          them side by side:
        </p>

        <div className="nmt-comparison">
          <div className="nmt-comparison-card global">
            <h3 className="nmt-comparison-title" style={{ color: "#0984e3" }}>
              &#127758; Global Attention
            </h3>
            <p className="nmt-p">
              <strong>Look at everything.</strong> The decoder considers ALL
              source words at every single time step.
            </p>
            <ul className="nmt-list">
              <li>Computes a weight for every input word</li>
              <li>Nothing is ever missed</li>
              <li>Can be slow for very long sentences</li>
            </ul>
            <div className="nmt-mini-diagram">
              <div className="nmt-mini-blocks">
                <div className="nmt-mini-block active-global">
                  h&#772;<sub>1</sub>
                </div>
                <div className="nmt-mini-block active-global">
                  h&#772;<sub>2</sub>
                </div>
                <div className="nmt-mini-block active-global">
                  h&#772;<sub>3</sub>
                </div>
                <div className="nmt-mini-block active-global">
                  h&#772;<sub>4</sub>
                </div>
                <div className="nmt-mini-block active-global">
                  h&#772;<sub>5</sub>
                </div>
              </div>
              <div className="nmt-mini-label">All words attended &#10003;</div>
            </div>
          </div>

          <div className="nmt-comparison-card local">
            <h3 className="nmt-comparison-title" style={{ color: "#e17055" }}>
              &#128269; Local Attention
            </h3>
            <p className="nmt-p">
              <strong>Focus on a window.</strong> The decoder only looks at a
              small group of source words around a predicted center position.
            </p>
            <ul className="nmt-list">
              <li>
                First predicts WHERE to look (position p<sub>t</sub>)
              </li>
              <li>Then attends to words in a small window only</li>
              <li>Much faster for long sentences</li>
            </ul>
            <div className="nmt-mini-diagram">
              <div className="nmt-mini-blocks">
                <div className="nmt-mini-block faded">
                  h&#772;<sub>1</sub>
                </div>
                <div className="nmt-mini-block active-local">
                  h&#772;<sub>2</sub>
                </div>
                <div className="nmt-mini-block active-local highlight-local">
                  h&#772;<sub>3</sub>
                </div>
                <div className="nmt-mini-block active-local">
                  h&#772;<sub>4</sub>
                </div>
                <div className="nmt-mini-block faded">
                  h&#772;<sub>5</sub>
                </div>
              </div>
              <div className="nmt-mini-label">Only window attended &#10003;</div>
            </div>
          </div>
        </div>

        <h3 className="nmt-h3">Local Attention: Two Variants</h3>
        <p className="nmt-p">
          The key question for local attention is: how does it decide WHERE to
          look? The paper proposes two methods:
        </p>

        <div className="nmt-table-wrapper">
          <table className="nmt-table">
            <thead>
              <tr>
                <th>Variant</th>
                <th>How Position is Chosen</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Monotonic</strong>
                </td>
                <td>
                  p<sub>t</sub> = t (just use the current time step)
                </td>
                <td>Languages with similar word order (English &rarr; French)</td>
              </tr>
              <tr>
                <td>
                  <strong>Predictive</strong>
                </td>
                <td>
                  p<sub>t</sub> = S &middot; sigmoid( v<sub>p</sub>
                  <sup>T</sup> &middot; tanh( W<sub>p</sub> &middot; h
                  <sub>t</sub> ) )
                </td>
                <td>
                  Languages with different word order (English &rarr; Japanese)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="nmt-p">
          In the predictive variant, the model <strong>learns</strong> where to
          look. The sigmoid function ensures the predicted position falls within
          the sentence length <em>S</em>.
        </p>

        <h3 className="nmt-h3">The Gaussian Trick</h3>
        <p className="nmt-p">
          In local attention, words closer to the predicted center get higher
          weight, following a bell-curve (Gaussian) pattern:
        </p>
        <div className="nmt-math-block">
          <div className="nmt-math-label">
            Local Attention with Gaussian Weighting
          </div>
          <div className="nmt-math-expr">
            &#945;<sub>t</sub>(s) = align( h<sub>t</sub> , h&#772;<sub>s</sub>{" "}
            ) &middot; exp( &minus;(s &minus; p<sub>t</sub>)&#178; / 2&#963;
            &#178; )
          </div>
        </div>
        <p className="nmt-p">
          This means: even within the window, the word right at the center gets
          the most attention, while words at the edges get less. The &#963;
          (sigma) parameter controls how wide the &ldquo;spotlight&rdquo; is.
          Think of it like a flashlight beam &mdash; brightest at the center and
          fading toward the edges.
        </p>

        {/* DIAGRAM: Gaussian bell curve */}
        <div className="nmt-figure">
          <div className="nmt-gaussian-visual">
            <div className="nmt-gaussian-bar" style={{ height: "20px" }}></div>
            <div className="nmt-gaussian-bar" style={{ height: "50px" }}></div>
            <div className="nmt-gaussian-bar" style={{ height: "85px" }}></div>
            <div
              className="nmt-gaussian-bar nmt-gaussian-peak"
              style={{ height: "120px" }}
            ></div>
            <div className="nmt-gaussian-bar" style={{ height: "85px" }}></div>
            <div className="nmt-gaussian-bar" style={{ height: "50px" }}></div>
            <div className="nmt-gaussian-bar" style={{ height: "20px" }}></div>
          </div>
          <div className="nmt-gaussian-labels">
            <span>s &minus; 3</span>
            <span>s &minus; 2</span>
            <span>s &minus; 1</span>
            <span className="nmt-gaussian-center-label">
              p<sub>t</sub>
            </span>
            <span>s + 1</span>
            <span>s + 2</span>
            <span>s + 3</span>
          </div>
          <div className="nmt-figure-caption">
            Figure 4: Gaussian weighting &mdash; The center position
            p<sub>t</sub> gets the highest attention weight (tallest bar). Words
            further away get progressively less attention, forming a bell-curve
            shape.
          </div>
        </div>
      </section>

      {/* ============ SECTION 8: SCORING FUNCTIONS ============ */}
      <section className="nmt-section">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          Three Ways to Compute Scores
        </h2>
        <p className="nmt-p">
          Remember Step 1 &mdash; computing the &ldquo;relevance score&rdquo;
          between the decoder state and each encoder state? The paper explores
          three different formulas for this:
        </p>

        <div className="nmt-table-wrapper">
          <table className="nmt-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Formula</th>
                <th>How It Works</th>
                <th>Speed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Dot Product</strong>
                </td>
                <td>
                  h<sub>t</sub>
                  <sup>T</sup> &middot; h&#772;<sub>s</sub>
                </td>
                <td>
                  Multiply matching elements and add them up. Simplest method
                  &mdash; zero extra parameters needed.
                </td>
                <td>
                  <span className="nmt-speed-badge fast">Fastest</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>General</strong>
                </td>
                <td>
                  h<sub>t</sub>
                  <sup>T</sup> &middot; W<sub>a</sub> &middot; h&#772;
                  <sub>s</sub>
                </td>
                <td>
                  Like dot product, but with a learnable weight matrix W
                  <sub>a</sub> in between. More flexible.
                </td>
                <td>
                  <span className="nmt-speed-badge medium">Medium</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Concat</strong>
                </td>
                <td>
                  v<sub>a</sub>
                  <sup>T</sup> &middot; tanh( W<sub>a</sub> &middot; [ h
                  <sub>t</sub> ; h&#772;<sub>s</sub> ] )
                </td>
                <td>
                  Concatenate both vectors and pass through a small neural
                  network layer. Most expressive.
                </td>
                <td>
                  <span className="nmt-speed-badge slow">Slowest</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="nmt-info-box">
          <div className="nmt-info-box-title">
            &#129300; Which one is best?
          </div>
          <p className="nmt-p" style={{ marginBottom: 0 }}>
            Surprisingly, the simple <strong>dot product</strong> performs
            remarkably well! This shows that sometimes the simplest approach is
            the most effective. In the paper&apos;s experiments, the
            &ldquo;general&rdquo; scoring gave the overall best results.
          </p>
        </div>
      </section>

      {/* ============ SECTION 9: INPUT FEEDING ============ */}
      <section className="nmt-section">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          Input Feeding: A Clever Enhancement
        </h2>
        <p className="nmt-p">
          The paper introduces one more smart trick called{" "}
          <strong>input feeding</strong>. The idea is simple but powerful &mdash;
          feed the previous attention result back into the decoder at the next
          time step.
        </p>
        <p className="nmt-p">Why does this help?</p>
        <ul className="nmt-list">
          <li>
            The decoder knows <strong>what it already focused on</strong> in the
            previous step
          </li>
          <li>It prevents the model from translating the same word twice</li>
          <li>
            Attention decisions are no longer independent &mdash; they build on
            each other
          </li>
        </ul>
        <div className="nmt-math-block">
          <div className="nmt-math-label">Input Feeding</div>
          <div className="nmt-math-expr">
            Decoder input at step t = [ previous output word ; h&#771;
            <sub>t&minus;1</sub> ]
          </div>
        </div>
        <p className="nmt-p">
          Think of it like a translator who, before writing each new word, first
          glances back at what they just wrote. This simple change led to
          consistent improvements across all attention models.
        </p>
      </section>

      {/* ============ SECTION 10: RESULTS ============ */}
      <section className="nmt-section">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          What Did the Paper Discover?
        </h2>
        <p className="nmt-p">
          The researchers tested all these attention variants on English &rarr;
          German translation using the WMT 2014 dataset. Translation quality is
          measured using <strong>BLEU score</strong> &mdash; a number from 0 to
          100, where higher means better translation.
        </p>

        <div className="nmt-table-wrapper">
          <table className="nmt-table nmt-results-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>BLEU Score</th>
                <th>Improvement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Baseline (no attention)</td>
                <td>20.0</td>
                <td>&mdash;</td>
              </tr>
              <tr>
                <td>Global Attention (dot)</td>
                <td>23.0</td>
                <td className="nmt-positive">+3.0</td>
              </tr>
              <tr>
                <td>Global Attention (general)</td>
                <td>23.0</td>
                <td className="nmt-positive">+3.0</td>
              </tr>
              <tr>
                <td>Local-m (monotonic)</td>
                <td>23.4</td>
                <td className="nmt-positive">+3.4</td>
              </tr>
              <tr className="nmt-highlight-row">
                <td>
                  <strong>Local-p (predictive)</strong>
                </td>
                <td>
                  <strong>23.4</strong>
                </td>
                <td className="nmt-positive">
                  <strong>+3.4</strong>
                </td>
              </tr>
              <tr className="nmt-best-row">
                <td>
                  <strong>Best Ensemble (8 models)</strong>
                </td>
                <td>
                  <strong>25.9</strong>
                </td>
                <td className="nmt-positive">
                  <strong>+5.9</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="nmt-h3">Key Findings</h3>
        <ul className="nmt-list">
          <li>
            Attention models <strong>significantly beat</strong> the no-attention
            baseline (+3 BLEU is a huge jump in machine translation!)
          </li>
          <li>
            Local attention with predictive alignment matches global attention
            while being <strong>more computationally efficient</strong>
          </li>
          <li>
            The dot product scoring function is{" "}
            <strong>surprisingly competitive</strong> despite being the simplest
          </li>
          <li>
            Input feeding <strong>consistently improves</strong> all attention
            variants
          </li>
          <li>
            Combining multiple models (ensemble) pushes quality even higher
          </li>
        </ul>
      </section>

      {/* ============ SECTION 11: LEGACY ============ */}
      <section className="nmt-section">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          Why This Paper Changed AI Forever
        </h2>
        <p className="nmt-p">
          The attention mechanism introduced here did not just improve machine
          translation &mdash; it sparked a <strong>revolution</strong> across ALL
          of artificial intelligence. Here is the incredible chain of events it
          set off:
        </p>

        <div className="nmt-timeline">
          <div className="nmt-timeline-item">
            <div className="nmt-timeline-year">2015 &mdash; This Paper</div>
            <div className="nmt-timeline-text">
              Luong et al. show effective attention approaches for NMT,
              establishing global and local attention as standard tools.
            </div>
          </div>
          <div className="nmt-timeline-item">
            <div className="nmt-timeline-year">
              2017 &mdash; The Transformer
            </div>
            <div className="nmt-timeline-text">
              Google&apos;s &ldquo;Attention Is All You Need&rdquo; paper removes
              recurrent networks entirely and builds a model using ONLY attention
              (called self-attention). This architecture becomes the foundation
              of modern AI.
            </div>
          </div>
          <div className="nmt-timeline-item">
            <div className="nmt-timeline-year">2018 &mdash; BERT</div>
            <div className="nmt-timeline-text">
              Google uses the Transformer encoder to create BERT, which
              revolutionizes language understanding tasks like search, question
              answering, and text classification.
            </div>
          </div>
          <div className="nmt-timeline-item">
            <div className="nmt-timeline-year">
              2019&ndash;2025 &mdash; GPT Series
            </div>
            <div className="nmt-timeline-text">
              OpenAI uses the Transformer decoder to build GPT-2, GPT-3, and
              GPT-4. These language models can write essays, generate code, pass
              professional exams, and have human-like conversations.
            </div>
          </div>
          <div className="nmt-timeline-item">
            <div className="nmt-timeline-year">Today &mdash; Everywhere</div>
            <div className="nmt-timeline-text">
              Attention powers ChatGPT, Google Search, image generators
              (DALL&middot;E, Midjourney), code assistants (Copilot), and more.
              The concept from this 2015 paper is now at the heart of nearly
              every AI system you use.
            </div>
          </div>
        </div>

        <div className="nmt-info-box">
          <div className="nmt-info-box-title">
            &#128640; Impact by Numbers
          </div>
          <p className="nmt-p" style={{ marginBottom: 0 }}>
            This paper has been cited over{" "}
            <strong>14,000 times</strong>. The attention mechanism it helped
            popularize is now used in models with billions of parameters, serving
            hundreds of millions of users daily around the world.
          </p>
        </div>
      </section>

      {/* ============ SECTION 12: KEY TAKEAWAYS ============ */}
      <section className="nmt-section">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          Key Takeaways
        </h2>
        <div className="nmt-takeaways">
          <div className="nmt-takeaway-card">
            <div className="nmt-takeaway-number">1</div>
            <div className="nmt-takeaway-text">
              <strong>Attention solves the bottleneck.</strong> Instead of
              compressing everything into one vector, the decoder can look back
              at the full input at every step.
            </div>
          </div>
          <div className="nmt-takeaway-card">
            <div className="nmt-takeaway-number">2</div>
            <div className="nmt-takeaway-text">
              <strong>
                Global attention is thorough; local attention is efficient.
              </strong>{" "}
              Choose based on your sentence length and computational budget.
            </div>
          </div>
          <div className="nmt-takeaway-card">
            <div className="nmt-takeaway-number">3</div>
            <div className="nmt-takeaway-text">
              <strong>Simple scoring can be powerful.</strong> The dot product is
              the simplest scoring function yet performs surprisingly well.
            </div>
          </div>
          <div className="nmt-takeaway-card">
            <div className="nmt-takeaway-number">4</div>
            <div className="nmt-takeaway-text">
              <strong>This paper changed AI history.</strong> Attention
              mechanisms from this work directly led to Transformers, BERT, GPT,
              and every modern AI system.
            </div>
          </div>
        </div>
      </section>

      {/* ============ REFERENCES ============ */}
      <section className="nmt-section nmt-references">
        <h2 className="nmt-h2" style={{ color: theme.text }}>
          References
        </h2>
        <ol className="nmt-ref-list">
          <li>
            Luong, M.T., Pham, H., &amp; Manning, C.D. (2015). &ldquo;Effective
            Approaches to Attention-based Neural Machine Translation.&rdquo;{" "}
            <em>
              Proceedings of the 2015 Conference on Empirical Methods in Natural
              Language Processing (EMNLP)
            </em>
            .
          </li>
          <li>
            Bahdanau, D., Cho, K., &amp; Bengio, Y. (2015). &ldquo;Neural
            Machine Translation by Jointly Learning to Align and
            Translate.&rdquo; <em>ICLR 2015</em>.
          </li>
          <li>
            Vaswani, A., et al. (2017). &ldquo;Attention Is All You
            Need.&rdquo;{" "}
            <em>
              Advances in Neural Information Processing Systems (NeurIPS)
            </em>
            .
          </li>
        </ol>
      </section>
    </div>
  );
}

export default AttentionNMTPost;
