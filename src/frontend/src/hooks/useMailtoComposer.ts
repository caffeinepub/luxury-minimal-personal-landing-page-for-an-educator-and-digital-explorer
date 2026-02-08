export function useMailtoComposer() {
  const composeMailto = (to: string, subject?: string, body?: string) => {
    const params = new URLSearchParams();
    
    if (subject) {
      params.append('subject', subject);
    }
    
    if (body) {
      params.append('body', body);
    }
    
    const mailtoUrl = `mailto:${to}${params.toString() ? '?' + params.toString() : ''}`;
    window.location.href = mailtoUrl;
  };

  return { composeMailto };
}
