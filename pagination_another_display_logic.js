renderPageNumbers = pageNumbers.map(number => {
    let classes = this.state.current_page === number ? styles.active : '';
  
    if (number == 1 || number == this.state.total || (number >= this.state.current_page - 2 && number <= this.state.current_page + 2)) {
      return (
        <span key={number} className={classes} onClick={() => this.makeHttpRequestWithPage(number)}>{number}</span>
      );
    }
  });