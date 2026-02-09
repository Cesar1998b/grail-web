import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    try {
      await fetch("https://app.loops.so/api/v1/contacts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.LOOPS_API_KEY}`,
        },
        body: JSON.stringify({
          email: email,
          source: "Grail Landing",
          userGroup: "Beta Waitlist"
        }),
      });
    } catch (loopsError) {
      console.error("Error guardando en Loops:", loopsError);
    }

    await resend.emails.send({
      from: "Grail Team <onboarding@grailapp.dev>", 
      to: email,
      subject: "✨ Bienvenido a la Beta Privada de Grail",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; color: #1a1a1a;">
          <h1 style="font-size: 24px; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 24px;">Estás dentro.</h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #444;">
            Gracias por unirte a la lista de espera de <strong>Grail</strong>. Has dado el primer paso para tener el control total de tus deseos de compra.
          </p>
          
          <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin: 30px 0;">
            <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111;">Próximos pasos:</p>
            <p style="margin: 8px 0 0 0; font-size: 14px; color: #666;">
              Recibirás una invitación oficial de <strong>Apple TestFlight</strong> en este correo tan pronto liberemos el siguiente lote de accesos.
            </p>
          </div>

          <p style="font-size: 14px; color: #888; margin-top: 40px; border-top: 1px solid #eaeaea; padding-top: 20px;">
            Grail App Inc. &bull; Design by David.
          </p>
        </div>
      `
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error general:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}