import { useState, useRef, useEffect } from 'react';
import { PersonCircle, BoxArrowRight, GearFill, PersonFill } from 'react-bootstrap-icons';
import styles from './UserAvatar.module.css';

export interface User {
  name: string;
  email: string;
  avatarUrl?: string;
}

interface UserAvatarProps {
  user: User | null;
  onLogin?: () => void;
  onLogout?: () => void;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

export default function UserAvatar({ user, onLogin, onLogout }: UserAvatarProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* ── Estado guest ── */
  if (!user) {
    return (
      <button className={styles.loginBtn} onClick={onLogin} aria-label="Entrar">
        <PersonCircle className={styles.loginIcon} />
        <span>Entrar</span>
      </button>
    );
  }

  /* ── Estado logado ── */
  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={styles.avatarBtn}
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu do usuário"
        aria-expanded={open}
      >
        {user.avatarUrl ? (
          <img className={styles.avatarImg} src={user.avatarUrl} alt={user.name} />
        ) : (
          <span className={styles.avatarInitials} aria-hidden="true">
            {getInitials(user.name)}
          </span>
        )}
      </button>

      {open && (
        <div className={styles.dropdown} role="menu">
          {/* Cabeçalho do dropdown */}
          <div className={styles.dropdownHeader}>
            <div className={styles.dropdownAvatar}>
              {user.avatarUrl ? (
                <img src={user.avatarUrl} alt={user.name} />
              ) : (
                <span>{getInitials(user.name)}</span>
              )}
            </div>
            <div className={styles.dropdownUserInfo}>
              <strong>{user.name}</strong>
              <span>{user.email}</span>
            </div>
          </div>

          <hr className={styles.divider} />

          <button className={styles.dropdownItem} role="menuitem">
            <PersonFill className={styles.itemIcon} />
            Meu perfil
          </button>
          <button className={styles.dropdownItem} role="menuitem">
            <GearFill className={styles.itemIcon} />
            Configurações
          </button>

          <hr className={styles.divider} />

          <button
            className={`${styles.dropdownItem} ${styles.logoutItem}`}
            role="menuitem"
            onClick={() => { setOpen(false); onLogout?.(); }}
          >
            <BoxArrowRight className={styles.itemIcon} />
            Sair
          </button>
        </div>
      )}
    </div>
  );
}
