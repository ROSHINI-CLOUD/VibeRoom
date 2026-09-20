import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import albumArt from '../assets/m83-hurry-up-were-dreaming.png'

type Route = 'home' | 'room' | 'lyrics' | 'taste'
type Reaction = 'Love' | 'More like this' | 'Okay' | 'Not for me'
type Vibe = 'More energy' | 'Chill' | 'Different' | 'Surprise'

const members = [
  { name: 'You', initials: 'J', tone: 'avatar-blue' },
  { name: 'Maya', initials: 'M', tone: 'avatar-coral' },
  { name: 'Leo', initials: 'L', tone: 'avatar-green' },
  { name: 'Priya', initials: 'P', tone: 'avatar-violet' },
]

const queue = [
  { title: 'Electric Feel', artist: 'MGMT', duration: '3:49', tone: 'queue-blue' },
  { title: 'Sweet Disposition', artist: 'The Temper Trap', duration: '3:52', tone: 'queue-olive' },
  { title: 'Sunset Lover', artist: 'Petit Biscuit', duration: '3:57', tone: 'queue-coral' },
]

const lyrics = [
  'A city awake',
  'Neon on the ceiling',
  'We move through the night',
  'Every light is a signal',
  'Stay with the feeling',
  'Let the room carry us',
]

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.65, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }
  switch (name) {
    case 'home': return <svg {...common}><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" /></svg>
    case 'music': return <svg {...common}><path d="M9 18V5l10-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" /></svg>
    case 'book': return <svg {...common}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M4 5.5v16" /><path d="M8 7h8M8 11h8" /></svg>
    case 'spark': return <svg {...common}><path d="m12 3 1.3 5.7L19 10l-5.7 1.3L12 17l-1.3-5.7L5 10l5.7-1.3z" /><path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6z" /></svg>
    case 'users': return <svg {...common}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" /><path d="M3 20c.4-3.2 2.4-5 6-5s5.6 1.8 6 5" /><path d="M15 14.7c2.8-.1 4.7 1.6 5 4.3" /></svg>
    case 'invite': return <svg {...common}><circle cx="9" cy="8" r="3" /><path d="M3 20c.4-3.2 2.4-5 6-5 1.5 0 2.7.3 3.7.9" /><path d="M18 14v6M15 17h6" /></svg>
    case 'heart': return <svg {...common}><path d="M20.8 8.9c0 5-8.8 10-8.8 10s-8.8-5-8.8-10a4.5 4.5 0 0 1 8.8-1.4 4.5 4.5 0 0 1 8.8 1.4Z" /></svg>
    case 'search': return <svg {...common}><circle cx="10.8" cy="10.8" r="6.4" /><path d="m16 16 5 5" /></svg>
    case 'smile': return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M8.5 14.2c1.8 2 5.2 2 7 0M9 9.7h.01M15 9.7h.01" /></svg>
    case 'close': return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>
    case 'bolt': return <svg {...common}><path d="m13 2-8 12h6l-1 8 8-12h-6z" /></svg>
    case 'waves': return <svg {...common}><path d="M3 8c3-3 5 3 8 0s5-3 8 0" /><path d="M3 13c3-3 5 3 8 0s5-3 8 0" /><path d="M3 18c3-3 5 3 8 0s5-3 8 0" /></svg>
    case 'shuffle': return <svg {...common}><path d="M3 7h3c4 0 5 10 9 10h6" /><path d="m18 14 3 3-3 3" /><path d="M3 17h3c1.5 0 2.4-1 3.3-2.2M14.8 9.2C15.7 8 16.6 7 18 7h3" /><path d="m18 4 3 3-3 3" /></svg>
    case 'prev': return <svg {...common}><path d="M6 5v14M18 6 10 12l8 6z" /></svg>
    case 'next': return <svg {...common}><path d="M18 5v14M6 6l8 6-8 6z" /></svg>
    case 'repeat': return <svg {...common}><path d="M17 2l3 3-3 3" /><path d="M4 11V9a4 4 0 0 1 4-4h12" /><path d="m7 22-3-3 3-3" /><path d="M20 13v2a4 4 0 0 1-4 4H4" /></svg>
    case 'plus': return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>
    case 'more': return <svg {...common}><circle cx="5" cy="12" r=".8" fill="currentColor" /><circle cx="12" cy="12" r=".8" fill="currentColor" /><circle cx="19" cy="12" r=".8" fill="currentColor" /></svg>
    case 'chevron': return <svg {...common}><path d="m9 6 6 6-6 6" /></svg>
    case 'phone': return <svg {...common}><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M10 18.5h4" /></svg>
    case 'pause': return <svg {...common}><path d="M9 5v14M15 5v14" strokeWidth="2.4" /></svg>
    case 'play': return <svg {...common} fill="currentColor" stroke="none"><path d="m9 5 10 7-10 7z" /></svg>
    case 'sparkle': return <svg {...common}><path d="m12 3 1.3 5.7L19 10l-5.7 1.3L12 17l-1.3-5.7L5 10l5.7-1.3z" /><path d="m19 16 .5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5z" /></svg>
    default: return <svg {...common}><circle cx="12" cy="12" r="8" /></svg>
  }
}

function Button({ children, className = '', onClick, ariaLabel, type = 'button' }: { children: ReactNode; className?: string; onClick?: () => void; ariaLabel?: string; type?: 'button' | 'submit' }) {
  return <button type={type} aria-label={ariaLabel} className={`pressable ${className}`} onClick={onClick}>{children}</button>
}

function App() {
  const [route, setRoute] = useState<Route>('room')
  const [reaction, setReaction] = useState<Reaction>('Love')
  const [vibe, setVibe] = useState<Vibe>('More energy')
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(42)
  const [lyricsOpen, setLyricsOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [request, setRequest] = useState('')

  const navItems: { route: Route; label: string; icon: string }[] = [
    { route: 'home', label: 'Home', icon: 'home' },
    { route: 'room', label: 'Live Room', icon: 'music' },
    { route: 'lyrics', label: 'Lyrics', icon: 'book' },
    { route: 'taste', label: 'Taste DNA', icon: 'spark' },
  ]

  const duration = useMemo(() => {
    const total = 243
    const current = Math.round(total * (progress / 100))
    return `${Math.floor(current / 60)}:${String(current % 60).padStart(2, '0')}`
  }, [progress])

  function navigate(nextRoute: Route) {
    setRoute(nextRoute)
    setLyricsOpen(nextRoute === 'lyrics')
  }

  function invite() {
    void navigator.clipboard?.writeText('VIBE-7H2K')
    setToast('Room code copied')
    window.setTimeout(() => setToast(''), 1800)
  }

  function submitRequest(event: FormEvent) {
    event.preventDefault()
    if (!request.trim()) return
    setToast('Private request added to the DJ queue')
    setRequest('')
    window.setTimeout(() => setToast(''), 2400)
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="wordmark" onClick={() => navigate('room')} aria-label="Go to live room">VibeRoom</button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <button key={item.route} className={`nav-link ${route === item.route ? 'is-active' : ''}`} onClick={() => navigate(item.route)}>{item.label}</button>)}
        </nav>
        <div className="topbar-actions">
          <div className="room-status"><Icon name="users" size={18} /><span className="room-status-text">4 in room</span><i className="live-dot" /></div>
          <span className="topbar-divider" />
          <Button className="invite-button" onClick={invite}><Icon name="invite" size={18} /> <span>Invite</span></Button>
          <button className="profile-button" aria-label="Open profile">J</button>
        </div>
      </header>

      <main className="main-content">
        {route === 'room' && <LiveRoom onOpenLyrics={() => { setLyricsOpen(true); setRoute('lyrics') }} reaction={reaction} setReaction={setReaction} vibe={vibe} setVibe={setVibe} isPlaying={isPlaying} setIsPlaying={setIsPlaying} progress={progress} setProgress={setProgress} duration={duration} request={request} setRequest={setRequest} submitRequest={submitRequest} />}
        {route === 'home' && <Home onNavigate={navigate} />}
        {route === 'lyrics' && <LyricsView isPlaying={isPlaying} progress={progress} onClose={() => navigate('room')} />}
        {route === 'taste' && <TasteView onNavigate={navigate} />}
      </main>

      <footer className="footer-bar">
        <div><Icon name="users" size={22} /><span>Making music taste better together.</span></div>
        <span className="footer-center">Good people. Great music.</span>
        <button className="mobile-note" onClick={() => setToast('VibeRoom is designed for small screens too')}><Icon name="phone" size={18} /><span>Looks great on mobile too</span><Icon name="chevron" size={16} /></button>
      </footer>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => <button key={item.route} className={route === item.route ? 'is-active' : ''} onClick={() => navigate(item.route)}><Icon name={item.icon} size={20} /><span>{item.label}</span></button>)}
      </nav>

      {lyricsOpen && route !== 'lyrics' && <LyricsDrawer onClose={() => setLyricsOpen(false)} />}
      {toast && <div className="toast" role="status">{toast}</div>}
    </div>
  )
}

function LiveRoom({ onOpenLyrics, reaction, setReaction, vibe, setVibe, isPlaying, setIsPlaying, progress, setProgress, duration, request, setRequest, submitRequest }: { onOpenLyrics: () => void; reaction: Reaction; setReaction: (reaction: Reaction) => void; vibe: Vibe; setVibe: (vibe: Vibe) => void; isPlaying: boolean; setIsPlaying: (value: boolean) => void; progress: number; setProgress: (value: number) => void; duration: string; request: string; setRequest: (value: string) => void; submitRequest: (event: FormEvent) => void }) {
  const reactionItems: { label: Reaction; icon: string }[] = [{ label: 'Love', icon: 'heart' }, { label: 'More like this', icon: 'search' }, { label: 'Okay', icon: 'smile' }, { label: 'Not for me', icon: 'close' }]
  const vibeItems: { label: Vibe; icon: string }[] = [{ label: 'More energy', icon: 'bolt' }, { label: 'Chill', icon: 'waves' }, { label: 'Different', icon: 'sparkle' }, { label: 'Surprise', icon: 'spark' }]

  return <section className="room-layout">
    <div className="room-main panel">
      <div className="now-playing">
        <div className="album-wrap"><img src={albumArt} alt="Hurry Up, We're Dreaming album art" className="album-art" /><div className="album-shade" /></div>
        <div className="track-copy">
          <div className="now-label"><span className="coral-dot" />NOW PLAYING</div>
          <h1>Midnight City</h1>
          <p className="artist">M83</p>
          <p className="album-name">Hurry Up, We're Dreaming.</p>
          <p className="track-meta">2011 <span>·</span> Electronic <span>·</span> 4:03</p>
          <div className="progress-block"><input aria-label="Track progress" type="range" min="0" max="100" value={progress} style={{ background: `linear-gradient(90deg, var(--coral) 0 ${progress}%, #42494d ${progress}% 100%)` }} onChange={(event) => setProgress(Number(event.target.value))} /><div className="time-row"><span>{duration}</span><span>4:03</span></div></div>
          <div className="player-controls">
            <Button ariaLabel="Shuffle"><Icon name="shuffle" size={22} /></Button>
            <Button ariaLabel="Previous track"><Icon name="prev" size={25} /></Button>
            <Button ariaLabel={isPlaying ? 'Pause' : 'Play'} className="play-button" onClick={() => setIsPlaying(!isPlaying)}><Icon name={isPlaying ? 'pause' : 'play'} size={27} /></Button>
            <Button ariaLabel="Next track"><Icon name="next" size={25} /></Button>
            <Button ariaLabel="Repeat"><Icon name="repeat" size={22} /></Button>
          </div>
        </div>
      </div>

      <div className="control-separator" />
      <div className="reaction-section"><div className="section-kicker">HOW DO YOU FEEL ABOUT THIS SONG?</div><div className="reaction-grid">{reactionItems.map((item) => <button key={item.label} className={`choice-button ${reaction === item.label ? 'is-selected coral-selected' : ''}`} onClick={() => setReaction(item.label)}><Icon name={item.icon} size={28} /><span>{item.label}</span></button>)}</div></div>
      <div className="vibe-section"><div className="section-kicker">CHANGE THE VIBE</div><div className="reaction-grid">{vibeItems.map((item) => <button key={item.label} className={`choice-button ${vibe === item.label ? 'is-selected lime-selected' : ''}`} onClick={() => setVibe(item.label)}><Icon name={item.icon} size={27} /><span>{item.label}</span></button>)}</div></div>
    </div>

    <aside className="room-rail">
      <section className="rail-panel pulse-panel"><div className="panel-heading"><div><div className="section-kicker">ROOM PULSE</div><p>4 friends listening together</p></div><div className="live-state"><i className="lime-dot" />Live</div></div><div className="member-row">{members.map((member) => <div className="member" key={member.name}><div className={`member-avatar ${member.tone}`}>{member.initials}<i /></div><span>{member.name}</span></div>)}</div><p className="pulse-note">Different tastes. A better soundtrack.</p></section>
      <section className="rail-panel queue-panel"><div className="panel-heading compact"><div className="section-kicker">QUEUE <span>3 songs</span></div><Button className="add-button"><Icon name="plus" size={17} /><span>Add songs</span></Button></div><div className="queue-list">{queue.map((item, index) => <button className="queue-item" key={item.title}><span className="queue-number">{index + 1}</span><div className={`queue-art ${item.tone}`}>{index === 0 ? 'MG' : index === 1 ? 'TD' : 'PS'}</div><div className="queue-copy"><strong>{item.title}</strong><span>{item.artist}</span></div><span className="queue-duration">{item.duration}</span><Icon name="more" size={18} /></button>)}</div></section>
      <section className="rail-panel why-panel"><div className="section-kicker">WHY THIS SONG?</div><ul className="reason-list"><li><Icon name="music" size={20} /><span>It keeps the room moving</span></li><li><Icon name="users" size={20} /><span>Bridges the energy gap</span></li><li><Icon name="heart" size={20} /><span>Gives Maya a moment</span></li></ul></section>
      <section className="rail-panel lyrics-panel"><Button className="lyrics-button" onClick={onOpenLyrics}><Icon name="book" size={25} /><span>Open lyrics</span><Icon name="chevron" size={20} /></Button></section>
      <section className="request-panel"><div><div className="section-kicker">PRIVATE REQUEST</div><p>Ask the DJ for a song. Only you will see this.</p></div><form onSubmit={submitRequest} className="request-form"><input value={request} onChange={(event) => setRequest(event.target.value)} placeholder="Song or mood" aria-label="Private song request" /><Button type="submit" ariaLabel="Send private request"><Icon name="chevron" size={19} /></Button></form></section>
    </aside>
  </section>
}

function Home({ onNavigate }: { onNavigate: (route: Route) => void }) {
  return <section className="simple-view home-view"><div className="home-copy"><div className="now-label"><span className="coral-dot" />GROUP MUSIC, WITHOUT THE AUX FIGHT</div><h1>No one fights<br />for the AUX.</h1><p>VibeRoom learns the room, keeps the energy moving, and makes sure everyone gets a moment.</p><div className="home-actions"><Button className="primary-button" onClick={() => onNavigate('room')}>Enter live room <Icon name="chevron" size={18} /></Button><Button className="secondary-button" onClick={() => onNavigate('taste')}>See Taste DNA</Button></div></div><div className="home-preview"><img src={albumArt} alt="Late-night listening scene" /><div className="preview-caption"><span>FRIDAY NIGHT</span><strong>Different tastes.<br />A better soundtrack.</strong></div></div></section>
}

function LyricsView({ isPlaying, progress, onClose }: { isPlaying: boolean; progress: number; onClose: () => void }) {
  const activeIndex = isPlaying ? Math.min(lyrics.length - 1, Math.floor(progress / 20)) : 1
  return <section className="lyrics-view"><div className="lyrics-top"><div><div className="now-label"><span className="coral-dot" />SMART LYRICS</div><h1>Midnight City</h1><p>M83 · Hurry Up, We're Dreaming.</p></div><Button className="secondary-button" onClick={onClose}><Icon name="chevron" size={17} /> Back to room</Button></div><div className="lyrics-layout"><div className="lyrics-art"><img src={albumArt} alt="Midnight City artwork" /><div className="lyrics-playing"><span className={isPlaying ? 'equalizer is-playing' : 'equalizer'}><i /><i /><i /></span>{isPlaying ? 'Playing from the host device' : 'Paused by the host'}</div></div><div className="lyrics-lines">{lyrics.map((line, index) => <p className={index === activeIndex ? 'is-current' : index < activeIndex ? 'is-past' : ''} key={line}>{line}</p>)}<div className="lyrics-actions"><Button className="secondary-button"><Icon name="sparkle" size={18} /> Explain this line</Button><Button className="secondary-button"><Icon name="heart" size={18} /> Save moment</Button></div></div></div></section>
}

function LyricsDrawer({ onClose }: { onClose: () => void }) {
  return <div className="drawer-backdrop" onClick={onClose}><aside className="lyrics-drawer" onClick={(event) => event.stopPropagation()}><div className="drawer-heading"><div><div className="section-kicker">SMART LYRICS</div><h2>Midnight City</h2><p>M83</p></div><Button ariaLabel="Close lyrics" onClick={onClose}><Icon name="close" /></Button></div>{lyrics.slice(0, 4).map((line, index) => <p className={index === 1 ? 'is-current' : ''} key={line}>{line}</p>)}<Button className="primary-button">Open full lyrics <Icon name="chevron" size={17} /></Button></aside></div>
}

function TasteView({ onNavigate }: { onNavigate: (route: Route) => void }) {
  const tastes = [{ label: 'Electronic', value: 82, color: 'coral' }, { label: 'Dream pop', value: 68, color: 'lime' }, { label: 'Indie dance', value: 74, color: 'blue' }, { label: 'Discovery', value: 56, color: 'violet' }]
  return <section className="simple-view taste-view"><div className="taste-heading"><div><div className="now-label"><span className="coral-dot" />YOUR LISTENING SHAPE</div><h1>Taste DNA</h1><p>A living sketch of what pulls you in — shaped by every reaction.</p></div><Button className="secondary-button" onClick={() => onNavigate('room')}><Icon name="chevron" size={17} /> Back to room</Button></div><div className="taste-content"><div className="dna-orbit"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="dna-center"><strong>J</strong><span>curious<br />night listener</span></div><i className="orbit-dot dot-one" /><i className="orbit-dot dot-two" /><i className="orbit-dot dot-three" /></div><div className="taste-bars"><div className="section-kicker">CURRENT SIGNALS</div>{tastes.map((taste) => <div className="taste-row" key={taste.label}><div><span>{taste.label}</span><strong>{taste.value}%</strong></div><div className="taste-track"><i className={`taste-fill ${taste.color}`} style={{ width: `${taste.value}%` }} /></div></div>)}<div className="taste-note"><Icon name="sparkle" size={19} /><span>Your profile is becoming more open to <strong>bright, melodic detours.</strong></span></div></div></div></section>
}

export { App }
