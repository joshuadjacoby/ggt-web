export default function Footer() {
  return (
    <footer className="bg-gray-800 p-6 text-white">
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
        {/* Psychology Today Badge */}
        <div
          className="flex items-center justify-center"
          style={{ height: "50px" }}
        >
          {/* We reserve space for the badge */}
          <a
            href="https://www.psychologytoday.com/profile/1352154"
            className="sx-verified-seal"
            aria-label="Psychology Today Verified"
          />
          <script
            type="text/javascript"
            src="https://member.psychologytoday.com/verified-seal.js"
            data-badge="14"
            data-id="1352154"
            data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xNC9wcm9maWxlLzEzNTIxNTQ/Y2FsbGJhY2s9c3hjYWxsYmFjaw=="
            defer
          />
        </div>

        {/* Copyright Text */}
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Golden Gate Therapy. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
