import { GOOGLE_SHEET_CONFIG } from "@/constants/googleSheet";

export interface EnquiryPayload {
  name: string;
  phone: string;
  email: string;
  unit?: string;
  message?: string;
  timestamp?: string;
}

/**
 * Submits enquiry details to Google Sheets via Google Apps Script Web App.
 * Uses URLSearchParams with mode: 'no-cors' so that Google Apps Script natively
 * receives all fields inside e.parameter without parsing or CORS blocks.
 */
export async function submitToGoogleSheet(data: EnquiryPayload): Promise<boolean> {
  const url = GOOGLE_SHEET_CONFIG.WEBAPP_URL;
  if (!url || !url.trim()) {
    console.warn(
      "Google Sheet Web App URL is not set. Update src/constants/googleSheet.ts or add NEXT_PUBLIC_GOOGLE_SHEET_URL."
    );
    return false;
  }

  try {
    const timestamp =
      data.timestamp ||
      new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      });

    const params = new URLSearchParams();
    params.append("timestamp", timestamp);
    params.append("name", data.name);
    params.append("phone", data.phone);
    params.append("email", data.email);
    params.append("unit", data.unit || "Not Specified");
    params.append("message", data.message || "");

    await fetch(url.trim(), {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    console.log("Submitted enquiry to Google Sheet successfully");
    return true;
  } catch (error) {
    console.error("Failed to submit to Google Sheet:", error);
    return false;
  }
}
