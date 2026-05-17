function generateTeamCard(name, id) {
    name = name || 'Unknown';
    id = id || 'Unknown';
    const initials = name.trim().split(/\s+/).filter(Boolean).map(w => w[0]).join('');
    return `<div class="team-card"><div class="avatar" aria-hidden="true">${initials}</div><h4>${name}</h4><span>ID: ${id}</span></div>`;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateTeamCard };
}
