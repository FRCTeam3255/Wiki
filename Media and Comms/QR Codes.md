# QR Codes

QR codes are used to give people quick access to our online resources at events and on printed materials. By pointing a QR code at a Wix redirect URL (instead of a final destination URL), we can change where the QR code leads at any time without having to regenerate or reprint the code.

## Overview

1. Create a redirect on the Wix website that points to the desired destination URL.
2. Generate a QR code that points to the Wix redirect URL.
3. Save the QR code image to the team's GitHub graphics repository.

## Step 1: Create a Wix URL Redirect

!!! Note
    Creating or editing URL redirects requires editor access to the Wix site. See [Logging In](./Website.md#logging-in) if you do not have access.

1. Log in to [Wix.com](https://www.wix.com) (see [Website > Logging In](./Website.md#logging-in)).
2. From the site dashboard, open the sidebar and navigate to **Marketing & SEO** → **SEO Tools** → **URL Redirect Manager**.
3. Click **+ New Redirect**.
4. In the **Old URL** field, enter the short path you want to appear in the QR code (e.g., `/robot2025`).
5. In the **New URL** field, enter the full destination URL you want to redirect to (e.g., `https://www.youtube.com/watch?v=example`).
6. Click **Save**.

!!! Tip
    Keep the **Old URL** short and descriptive so the QR code destination is easy to update later without breaking anything.

## Step 2: Generate the QR Code

1. Go to [the-qrcode-generator.com](https://www.the-qrcode-generator.com).
2. Select the **URL** tab.
3. Enter the full Wix redirect URL (e.g., `https://www.supernurds.com/robot2025`).
4. The QR code preview will update automatically.
5. Click **Download** to save the QR code image.

!!! Note
    If the destination URL needs to change in the future, update the redirect in the Wix URL Redirect Manager (Step 1). The QR code itself does not need to be regenerated.

## Step 3: Save the QR Code to GitHub

Save the downloaded QR code image to the team's GitHub graphics repository so it can be found and reused later.

1. If the QR code is specific to the current season, add it to the **yearly graphics repository** (e.g., [2026_Graphics](https://github.com/FRCTeam3255/2026_Graphics)).
2. If the QR code is for a resource that will be used across multiple seasons (e.g., a link to the team website), add it to the **standard graphics repository** ([Standard_Graphics](https://github.com/FRCTeam3255/Standard_Graphics)).
3. Commit the file with a descriptive name (e.g., `qr-robot2026.png`) so it is easy to identify.
