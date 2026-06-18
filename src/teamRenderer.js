function generateTeamCard(name, id) {
    const safeName = name || 'Unknown';
    const safeId = id || 'Unknown';
    const initials = safeName.split(' ').map(w => w[0]).join('');
    return `<div class="team-card"><div class="avatar" aria-hidden="true">${initials}</div><h4>${safeName}</h4><span>ID: ${safeId}</span></div>`;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateTeamCard };
}
