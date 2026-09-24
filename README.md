# TACC anonymous project page

This is a local static draft modeled on the section order, dimensions, spacing, and colors of the ZPressor project page. The body font is Times New Roman as requested. It has no external dependencies, analytics, hosted inference service, or tracking code.

## Current content

- Header with anonymous paper status and resource placeholders.
- TL;DR and Figure 1 from the current anonymous manuscript.
- The manuscript abstract.
- Method section with Figure 2 and its corresponding explanation.
- Three interactive comparison players with synchronized backbone/TACC videos and draggable vertical dividers: LagerNVS on DL3DV (three scenes), LVSM Decoder-Only on RealEstate10K (three scenes), and CLiFT on DL3DV (four scenes).
- Every comparison is encoded at 15 FPS and loops automatically without playback controls or a progress bar.
- Full Tables 1–3 with PSNR, SSIM, LPIPS, and target-time Effective FPS.
- Analysis section with the updated Figure 5 efficiency/E2E overview and Figure 7 LVSM dense-context scaling result.
- Code links point to the anonymous GitHub repository at `https://github.com/User22387/tacc`.

The page content was checked against the current anonymous manuscript on 2026-09-24. Recheck every claim, number, caption, and exported figure whenever the manuscript changes.

## Preview

From this directory, run `python -m http.server 8765 --bind 127.0.0.1` and open `http://127.0.0.1:8765/`.

## Comparison media

All paired videos use the same scene, source views, target trajectory, frame count, resolution, and encoding settings within each comparison.

## Publication boundary

Keep this page local while the paper and artifacts are private. Publish it from a new, clean anonymous repository after checking the full history and all assets for identifying information.
