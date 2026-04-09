        // Configuration WhatsApp (à remplacer)
        const WHATSAPP_NUMBER = "33612345678"; // ← REMPLACEZ PAR VOTRE NUMÉRO
        
        const message = encodeURIComponent("Bonjour, je viens de découvrir SecureBoost et je souhaiterais en savoir plus sur l'écosystème digital complet pour mon business.");
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
        
        document.querySelectorAll('#demoBtn, #ctaBtn').forEach(btn => {
            btn.href = whatsappUrl;
            btn.target = "_blank";
        });
