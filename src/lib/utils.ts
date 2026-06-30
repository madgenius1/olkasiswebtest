import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function submitForm(
  endpoint: string,
  data: Record<string, string>
): Promise<{ success: boolean; message: string }> {
  const backendUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!backendUrl) {
    return {
      success: false,
      message:
        "Form submission is not yet configured. Please contact us directly at info@olkasiscapital.com",
    };
  }

  try {
    const res = await fetch(`${backendUrl}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Server error");

    return { success: true, message: "Submitted successfully!" };
  } catch {
    return {
      success: false,
      message:
        "Unable to submit right now. Please try again or email info@olkasiscapital.com",
    };
  }
}
