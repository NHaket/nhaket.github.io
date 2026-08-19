---
layout: page
title: Navigating Meaning Spaces; A Contextualist Perspective on Conceptual Engineering
description: PhD Research Project
importance: 1
category: work
related_publications: true
---

Words are not neutral containers for ideas. They carry assumptions, histories, and framings that shape how we think, and sometimes people try to change them deliberately. The field of **Conceptual Engineering (CE)** takes this seriously: it asks how and why the meanings of words get revised, what it takes to revise them successfully, and what the philosophical and social consequences of doing so are. Classic examples include proposals to redefine WOMAN in terms of social structure rather than biology (Haslanger, 2000), or MARRIAGE as the law has understood it over recent decades. My PhD developed a new theoretical framework for CE grounded in the philosophy of language and linguistics, and tested it using computational and corpus-based methods.

## The Problem with Words Alone

Most CE research focuses on individual words as its target of analysis. But meaning does not live in words in isolation. Consider a mother telling her child with a scraped knee, "You're not going to die." The words, taken literally, are obviously not the point. Meaning emerges at the level of the proposition: the full structured thought expressed by an utterance in context, not just the sum of its parts (Bach, 1994).

This has real consequences for CE. If you engineer a word without accounting for how it combines with context to generate propositional content, you may end up with a revised definition that fails to do what you intended, or that produces unintended meanings in the utterances where it actually appears. My thesis argues that CE needs a properly propositional framework, and that **Default Discourse Semantics (DDS)**, developed by Prof. Kasia Jaszczolt, provides exactly that. DDS models how hearers construct the primary interpreted proposition from a mix of linguistic meaning, pragmatic inference, social cognition, and world knowledge, giving CE a theoretically rigorous account of what it is actually trying to change.

## Mapping Meaning Empirically

Theory alone is not enough. To show that these distinctions have real purchase on how language actually works, the thesis deploys **BERT-based distributional semantic modelling** on the spoken component of the British National Corpus 2014. Using contextualised word embeddings, I construct what I call **landscapes of meaning**: quantitative and visual representations of how a word's usage clusters differently across discourse contexts, speakers, and social settings.

These landscapes make abstract theoretical claims tractable. They show, for instance, that the distributional behaviour of a word in spoken interaction reflects the stereotypical assumptions and evaluative freight associated with it, and that these cluster differently depending on who is speaking and in what context. This provides empirical grounding for the claim that CE interventions face different challenges depending on which layer of meaning they target, and in which discourse communities.

This strand of work was developed in collaboration with Ryan Daniels, resulting in a co-authored paper in the Proceedings of the Society for Computation in Linguistics.

## Key Contributions

Taken together, the thesis makes three main contributions:

- A **propositional reframing of CE** via DDS, showing that meaning revision must be understood at the level of the full proposition rather than the isolated word.
- A **taxonomy of the layers of word meaning** that CE can target, distinguishing encoded linguistic meaning, associated conceptual content, and the meaning that actually contributes to the proposition expressed, with predictions about which interventions are likely to succeed and why.
- **Empirical evidence**, grounding the theoretical claims in how language actually behaves.

## Related Publications

Haket, N. From words to propositions: rethinking meaning construction in conceptual engineering. _Synthese_ 208, 14 (2026). https://doi.org/10.1007/s11229-026-05659-x

Haket, N. & Daniels, R. BERT's conceptual cartography: mapping the landscapes of meaning. _Proceedings of the Society for Computation in Linguistics_ 8, 182–198 (2025). https://doi.org/10.7275/scil.3145

Haket, N. Collaborative conceptual engineering: philosophy and linguistics. In _Conceptual Engineering: Methodological and Metaphilosophical Issues_ (ed. Stalmaszczyk, P.) 227–253 (Brill, 2024). https://doi.org/10.30965/9783969753026_012

Haket, N. Nullius in verba: conceptual engineering and the Royal Society Corpus. _Cambridge Occasional Papers in Linguistics_ 15, 155–195 (2023). https://www.copil.mmll.cam.ac.uk/files/v15_Haket.pdf
