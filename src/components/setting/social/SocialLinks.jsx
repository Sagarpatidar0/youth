import './SocialLinks.css';

const socialLinks = [
  { name: 'Telegram', icon: 'images/telegram-icon.png' },
  { name: 'Facebook', icon: 'images/facebook-icon.png' },
  { name: 'Twitter', icon: 'images/twitter-icon.png' },
  { name: 'Instagram', icon: 'images/instagram-icon.png' },
  { name: 'Discord', icon: 'images/discord-icon.png' },
  { name: 'Twitch', icon: 'images/twitch-icon.png' },
];

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <h2 className="social-links-title">SOCIAL LINK</h2>
      <p className="social-links-description">
        Add your social accounts to display them on your public profile and your community profile. Once you&apos;ve added an account, you can disconnect or stop displaying it at anytime.
      </p>
      <div className="social-links-list">
        {socialLinks.map((link, index) => (
          <div key={index} className="social-link">
            <img src={link.icon} alt={`${link.name} icon`} className="social-link-icon" />
            <button className="social-link-button">CONNECT</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
